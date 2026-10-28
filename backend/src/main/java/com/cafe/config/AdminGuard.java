package com.cafe.config;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Component;
@Component
public class AdminGuard {
 private final AdminTokenService tokens;
 public AdminGuard(AdminTokenService tokens){this.tokens=tokens;}
 public void check(HttpServletRequest request){
  String auth=request.getHeader("Authorization");
  String token=auth!=null&&auth.startsWith("Bearer ")?auth.substring(7):null;
  if(!tokens.valid(token)) throw new ResponseStatusException(HttpStatus.UNAUTHORIZED,"Admin login required");
 }
}
