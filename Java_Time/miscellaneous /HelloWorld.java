import java.io.*;

public class HelloWorld extends HttpServlet {
  private String message;

  public void init() throws ServletException {
    message = "Hello World";
  }

  public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    Response.setContentType("text/http");
    PrintWriter out = response.getWriter();
    out.println("<h1>" + message + "</h1>");
  }

  public void destroy() {

  }
}