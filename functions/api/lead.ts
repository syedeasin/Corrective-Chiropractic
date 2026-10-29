// Cloudflare Pages Function: POST /api/lead
// Validates the coverage form and forwards it to LEAD_WEBHOOK_URL (Zapier, Make, a CRM, etc.) when set.
// Set it in Cloudflare dashboard > Pages > project > Settings > Variables, or in .dev.vars for `wrangler pages dev`.

interface Env {
  LEAD_WEBHOOK_URL?: string;
}

const wantsJson = (req: Request) => (req.headers.get('accept') ?? '').includes('application/json');

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const form = await request.formData();
  const get = (k: string) => String(form.get(k) ?? '').trim();

  // Honeypot: bots fill hidden fields. Pretend it worked.
  if (get('company')) return done(request);

  const lead = {
    firstName: get('firstName'),
    phone: get('phone'),
    email: get('email'),
    carrier: get('carrier'),
    smsConsent: get('smsConsent') === 'yes',
    submittedAt: new Date().toISOString(),
    page: request.headers.get('referer') ?? '',
  };

  const digits = lead.phone.replace(/\D/g, '');
  if (!lead.firstName || digits.length < 10 || !/^\S+@\S+\.\S+$/.test(lead.email) || !lead.carrier) {
    const error = 'Please fill in your name, a valid phone number, email and carrier.';
    return wantsJson(request)
      ? Response.json({ ok: false, error }, { status: 400 })
      : new Response(error, { status: 400 });
  }

  if (env.LEAD_WEBHOOK_URL) {
    const res = await fetch(env.LEAD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(lead),
    });
    if (!res.ok) {
      const error = 'We could not send your details.';
      return wantsJson(request)
        ? Response.json({ ok: false, error }, { status: 502 })
        : new Response(error, { status: 502 });
    }
  } else {
    console.log('LEAD_WEBHOOK_URL not set, lead not forwarded:', lead);
  }

  return done(request);
};

function done(request: Request) {
  return wantsJson(request)
    ? Response.json({ ok: true })
    : Response.redirect(new URL('/thank-you', request.url).toString(), 303);
}
