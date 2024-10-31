import { NextResponse } from "next/server";
import { authMiddleware } from "./middlewares/api/authMiddleware";

export const config = {
  matcher: "/api/:path*",
};

export default function middleware(request: Request) {
  const { isValid } = authMiddleware(request);
  if (!isValid && request.url.includes("/api/blogs")) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  return NextResponse.next();
}
