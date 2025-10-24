import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate secret token
    const secret = request.nextUrl.searchParams.get("secret");
    const expectedSecret = process.env.REVALIDATE_SECRET_TOKEN;

    if (!expectedSecret) {
      return NextResponse.json(
        { message: "Server configuration error: REVALIDATE_SECRET_TOKEN not set" },
        { status: 500 },
      );
    }

    if (secret !== expectedSecret) {
      return NextResponse.json(
        { message: "Invalid secret token" },
        { status: 401 },
      );
    }

    // Get the path(s) to revalidate from the request body
    const { path, paths } = body;

    // Revalidate single path or multiple paths
    if (path) {
      revalidatePath(path);
      return NextResponse.json({
        revalidated: true,
        path,
        now: Date.now(),
      });
    }

    if (paths && Array.isArray(paths)) {
      paths.forEach((p: string) => revalidatePath(p));
      return NextResponse.json({
        revalidated: true,
        paths,
        now: Date.now(),
      });
    }

    // Default: revalidate the homepage if no path specified
    revalidatePath("/");
    return NextResponse.json({
      revalidated: true,
      path: "/",
      now: Date.now(),
    });
  }
  catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { message: "Error revalidating", error: errorMessage },
      { status: 500 },
    );
  }
}
