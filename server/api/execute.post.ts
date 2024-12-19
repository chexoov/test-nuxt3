export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (
    body.code === "console.log('Hello, world!');" &&
    body.language === "typescript"
  ) {
    return { status: "success", output: "Hello, world!\n" };
  }
  if (body.code === "print('Hello, world!')" && body.language === "python") {
    return { status: "success", output: "Hello, world!\n" };
  }

  return { status: "error", error: "SyntaxError: Unexpected token" };
});
