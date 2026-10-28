package com.cafe.model;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
@Entity @Table(name="menu_items")
public class MenuItem {
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
  @NotBlank @Size(max=120) private String name;
  @NotBlank @Size(max=500) private String description;
  @NotBlank @Size(max=60) private String category;
  @NotNull @DecimalMin("0.0") private Double price;
  @Size(max=1000) private String image;
  private boolean available = true;
  public MenuItem() {}
  public MenuItem(String name,String description,String category,Double price,String image,boolean available){this.name=name;this.description=description;this.category=category;this.price=price;this.image=image;this.available=available;}
  public Long getId(){return id;} public void setId(Long id){this.id=id;}
  public String getName(){return name;} public void setName(String name){this.name=name;}
  public String getDescription(){return description;} public void setDescription(String description){this.description=description;}
  public String getCategory(){return category;} public void setCategory(String category){this.category=category;}
  public Double getPrice(){return price;} public void setPrice(Double price){this.price=price;}
  public String getImage(){return image;} public void setImage(String image){this.image=image;}
  public boolean isAvailable(){return available;} public void setAvailable(boolean available){this.available=available;}
}
