package com.cafe.controller;
import com.cafe.model.*;
import com.cafe.repository.*;
import org.springframework.web.bind.annotation.*;
import java.util.*;
@RestController @RequestMapping("/api")
public class PublicController {
 private final MenuItemRepository menu;
 public PublicController(MenuItemRepository menu){this.menu=menu;}
 @GetMapping("/health") public Map<String,String> health(){return Map.of("status","ok");}
 @GetMapping("/menu") public List<MenuItem> menu(){return menu.findByAvailableTrueOrderByCategoryAscNameAsc();}
 @GetMapping("/menu/popular") public List<MenuItem> popular(){return menu.findByPopularTrueAndAvailableTrue();}
 @GetMapping("/menu/categories") public List<String> categories(){return menu.findByAvailableTrueOrderByCategoryAscNameAsc().stream().map(MenuItem::getCategory).distinct().toList();}
}
