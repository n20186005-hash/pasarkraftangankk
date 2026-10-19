export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.protocol === 'http:' || url.hostname === 'www.pasarkraftangankk.com') {
      url.protocol = 'https:';
      url.hostname = 'pasarkraftangankk.com';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
