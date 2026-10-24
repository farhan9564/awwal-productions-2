import { prepareEnquiry } from "../../../lib/enquiry.mjs";
export const runtime = "nodejs";
export async function POST(request) {
  if (!request.headers.get("content-type")?.includes("application/json"))
    return Response.json(
      { error: "Expected a JSON enquiry." },
      { status: 415 },
    );
  try {
    const body = await request.text();
    if (body.length > 16000)
      return Response.json(
        { error: "The enquiry is too large." },
        { status: 413 },
      );
    return Response.json(prepareEnquiry(JSON.parse(body)), {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof SyntaxError
            ? "Invalid enquiry format."
            : error.message,
      },
      { status: 400 },
    );
  }
}
