package com.google.sps.servlets;

import com.google.gson.Gson;

//import sun.jvm.hotspot.HelloWorld;
import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//import sun.jvm.hotspot.HelloWorld;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/first-servlet")
public class HelloWorldServlet extends HttpServlet {
   
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
     String[] factsAboutMe = {"My first word as a baby was Tacos", "I love to speak french", "My favorite T.V. show is MasterChef"};
     String json = convertToJsonUsingGson(factsAboutMe);
     response.setContentType("application/json;");
    response.getWriter().println(json);
  }
  private String convertToJsonUsingGson(String[]factsAboutMe) {
    Gson gson = new Gson();
    String json = gson.toJson(factsAboutMe);
    return json;
  }
}
