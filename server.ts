import * as path from "jsr:@std/path@1.0.9";

const assets = async (pathname: string) =>
  await Deno.readTextFile(path.join(import.meta.dirname!, pathname));

Deno.serve(async (req) => {
  const url = new URL(req.url);
  if (path.extname(url.pathname) === ".yaml") {
    try {
      const yaml = await assets(url.pathname);
      return new Response(yaml, { headers: { "content-type": "text/yaml" } });
    } catch (error) {
      console.error(error);
      return new Response(null, { status: 404 });
    }
  }

  const html = await Deno.readTextFile(Deno.env.get("HTML_FILE")!);
  return new Response(html, {
    headers: {
      "content-type": "text/html",
    },
  });
});
