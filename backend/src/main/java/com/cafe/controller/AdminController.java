package com.cafe.controller;
import com.cafe.config.*;
import com.cafe.model.*;
import com.cafe.repository.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.*;
@RestController @RequestMapping("/api/admin")
public class AdminController {
 private final MenuItemRepository menu; private final AdminTokenService tokens; private final AdminGuard guard;
 @Value("${app.admin.username}") private String adminUsername;
 @Value("${app.admin.password}") private String adminPassword;
 public AdminController(MenuItemRepository menu,AdminTokenService tokens,AdminGuard guard){this.menu=menu;this.tokens=tokens;this.guard=guard;}
 @PostMapping("/login") public Map<String,String> login(@RequestBody Map<String,String> body){
  if(!Objects.equals(adminUsername,body.get("username"))||!Objects.equals(adminPassword,body.get("password")))throw new ResponseStatusException(HttpStatus.UNAUTHORIZED,"Invalid username or password");
  return Map.of("token",tokens.create());
 }
 @PostMapping("/logout") public Map<String,String> logout(HttpServletRequest request){guard.check(request);String auth=request.getHeader("Authorization");tokens.revoke(auth.substring(7));return Map.of("message","Signed out");}
 @PostMapping("/menu") @ResponseStatus(HttpStatus.CREATED) public MenuItem createMenu(@Valid @RequestBody MenuItem item,HttpServletRequest r){guard.check(r);item.setId(null);return menu.save(item);}
 @PutMapping("/menu/{id}") public MenuItem updateMenu(@PathVariable Long id,@Valid @RequestBody MenuItem item,HttpServletRequest r){guard.check(r);MenuItem existing=menu.findById(id).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND));existing.setName(item.getName());existing.setDescription(item.getDescription());existing.setCategory(item.getCategory());existing.setPrice(item.getPrice());existing.setImage(item.getImage());existing.setAvailable(item.isAvailable());return menu.save(existing);}
 @DeleteMapping("/menu/{id}") @ResponseStatus(HttpStatus.NO_CONTENT) public void deleteMenu(@PathVariable Long id,HttpServletRequest r){guard.check(r);menu.deleteById(id);}
}
