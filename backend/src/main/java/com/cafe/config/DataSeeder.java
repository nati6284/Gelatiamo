package com.cafe.config;
import com.cafe.model.MenuItem;
import com.cafe.model.Branch;
import com.cafe.repository.MenuItemRepository;
import com.cafe.repository.BranchRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
@Configuration
public class DataSeeder {
 @Bean CommandLineRunner seedMenu(MenuItemRepository repo){return args->{
  if(repo.count()==0){
   // Breakfast
   repo.save(new MenuItem("Gelatiamo Breakfast Combo","Egg scrambled, kifli, cheddar cheese, kircha, breakfast potato, avocado slice, boiled egg","Breakfast",250.0,"https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Scrambled Eggs","Fluffy scrambled eggs served with fresh bread","Breakfast",80.0,"https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Omelette","Three egg omelette with your choice of fillings","Breakfast",90.0,"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("French Toast","Classic French toast with maple syrup and butter","Breakfast",120.0,"https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Pancakes","Stack of fluffy pancakes with syrup","Breakfast",130.0,"https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Avocado Toast","Smashed avocado on toasted bread with olive oil","Breakfast",140.0,"https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=85",true));
   
   // Torta
   repo.save(new MenuItem("Chocolate Torta","Rich chocolate layered cake with dark chocolate ganache","Torta",180.0,"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Tiramisu","Classic Italian coffee-flavored dessert","Torta",200.0,"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Strawberry Torta","Light sponge cake with fresh strawberries and cream","Torta",170.0,"https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Lemon Torta","Tangy lemon cream torta with meringue topping","Torta",160.0,"https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Pistachio Torta","Italian pistachio cream layered cake","Torta",190.0,"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=85",true));
   
   // Ice Cream
   repo.save(new MenuItem("Vanilla","Classic Madagascar vanilla bean gelato","Ice Cream",80.0,"https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Chocolate","Rich Belgian dark chocolate gelato","Ice Cream",80.0,"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Strawberry","Fresh strawberry gelato with real fruit pieces","Ice Cream",85.0,"https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Pistachio","Authentic Sicilian pistachio gelato","Ice Cream",100.0,"https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Hazelnut","Creamy hazelnut gelato with roasted nuts","Ice Cream",95.0,"https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Mango","Tropical mango sorbet, dairy-free","Ice Cream",85.0,"https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Lemon Sorbet","Refreshing lemon sorbet, dairy-free","Ice Cream",75.0,"https://images.unsplash.com/photo-1557142046-c704a3afc363?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Stracciatella","Fior di latte with chocolate shavings","Ice Cream",90.0,"https://images.unsplash.com/photo-1582716401301-b2407dc7563d?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Salted Caramel","Sweet and salty caramel gelato","Ice Cream",95.0,"https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Coffee","Intense Ethiopian coffee gelato","Ice Cream",90.0,"https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&w=900&q=85",true));
   
   // Cakes
   repo.save(new MenuItem("Chocolate Fudge Cake","Multi-layered chocolate cake with fudge frosting","Cakes",450.0,"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Red Velvet Cake","Classic red velvet with cream cheese frosting","Cakes",480.0,"https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Carrot Cake","Moist carrot cake with walnuts and cream cheese","Cakes",420.0,"https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Black Forest","Chocolate cake with cherry filling and whipped cream","Cakes",500.0,"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Vanilla Cake","Classic vanilla sponge with buttercream","Cakes",380.0,"https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Cheesecake","New York style cheesecake with berry compote","Cakes",460.0,"https://images.unsplash.com/photo-1533134486753-c833f0ed4866?auto=format&fit=crop&w=900&q=85",true));
   
   // Cold Drinks
   repo.save(new MenuItem("Fresh Orange Juice","Freshly squeezed orange juice","Cold Drinks",60.0,"https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Mango Smoothie","Creamy mango smoothie with yogurt","Cold Drinks",80.0,"https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Strawberry Smoothie","Fresh strawberry smoothie","Cold Drinks",80.0,"https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Iced Coffee","Cold brew coffee over ice","Cold Drinks",70.0,"https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Iced Latte","Espresso with cold milk over ice","Cold Drinks",75.0,"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Milkshake - Vanilla","Classic vanilla milkshake","Cold Drinks",90.0,"https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Milkshake - Chocolate","Rich chocolate milkshake","Cold Drinks",90.0,"https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Milkshake - Strawberry","Fresh strawberry milkshake","Cold Drinks",90.0,"https://images.unsplash.com/photo-1568901839119-631418a3910b?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Lemonade","Freshly made lemonade","Cold Drinks",50.0,"https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9f?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Iced Tea","Chilled peach or lemon iced tea","Cold Drinks",55.0,"https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85",true));
   
   // Hot Drinks
   repo.save(new MenuItem("Espresso","Single shot of Italian espresso","Hot Drinks",45.0,"https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Double Espresso","Double shot of Italian espresso","Hot Drinks",60.0,"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Americano","Espresso with hot water","Hot Drinks",55.0,"https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Cappuccino","Espresso with steamed milk and foam","Hot Drinks",70.0,"https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Latte","Espresso with steamed milk","Hot Drinks",75.0,"https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Macchiato","Espresso marked with foam","Hot Drinks",65.0,"https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Flat White","Espresso with microfoam milk","Hot Drinks",75.0,"https://images.unsplash.com/photo-1545665225-b23b99e4d45e?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Mocha","Espresso with chocolate and steamed milk","Hot Drinks",85.0,"https://images.unsplash.com/photo-1607681034540-2c46cc71896d?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Hot Chocolate","Rich Italian hot chocolate","Hot Drinks",80.0,"https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Tea - Black/Green","Selection of premium teas","Hot Drinks",50.0,"https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Herbal Tea","Chamomile, mint, or ginger tea","Hot Drinks",55.0,"https://images.unsplash.com/photo-1597318132469-b3c6a2c8f1d5?auto=format&fit=crop&w=900&q=85",true));
  }
 };}



}
