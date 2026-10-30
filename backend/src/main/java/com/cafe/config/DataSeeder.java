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
   // ICE CREAM
   repo.save(new MenuItem("Scoop","Single scoop of ice cream","Ice Cream",315.0,"https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Stick","Ice cream on a stick","Ice Cream",378.0,"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("1Kg Ice Cream","One kilogram of ice cream","Ice Cream",5040.0,"https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("1/2 Kg Ice Cream","Half kilogram of ice cream","Ice Cream",2520.0,"https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=85",true));
   
   // TORTA
   repo.save(new MenuItem("White / Black Torta","Classic white or black torta","Torta",2625.0,"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Caramel Torta","Rich caramel layered torta","Torta",2940.0,"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Chocolate Torta","Decadent chocolate torta","Torta",2940.0,"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Special Chocolate Torta","Premium special chocolate torta","Torta",3675.0,"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=85",true));
   
   // VIRGIN COCKTAIL
   repo.save(new MenuItem("Classic Mojito","Refreshing classic mojito","Virgin Cocktail",315.0,"https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Mango Mojito","Tropical mango flavored mojito","Virgin Cocktail",367.5,"https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Strawberry Mojito","Sweet strawberry mojito","Virgin Cocktail",367.5,"https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Blue Hawaiian Mojito","Exotic blue Hawaiian mojito","Virgin Cocktail",367.5,"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Gelatino Special Mojito","House special signature mojito","Virgin Cocktail",420.0,"https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Virgin Espresso Mojito","Coffee-infused mojito","Virgin Cocktail",367.5,"https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Virgin Margarita Mojito","Tangy margarita style mojito","Virgin Cocktail",367.5,"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",true));
   
   // CAKE
   repo.save(new MenuItem("English Cake","Traditional English cake","Cake",126.0,"https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Banana Cake","Moist banana cake","Cake",126.0,"https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Raisen Cake","Classic raisin cake","Cake",126.0,"https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Baklava","Sweet layered pastry","Cake",105.0,"https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Boxegna","Traditional Ethiopian sweet","Cake",231.0,"https://images.unsplash.com/photo-1587241321921-91a834d82d90?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Bombolino","Italian fried dough","Cake",105.0,"https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Donut","Classic glazed donut","Cake",157.5,"https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Cheese Cake","Creamy cheesecake","Cake",367.5,"https://images.unsplash.com/photo-1533134486753-c833f0ed4866?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Orange Cake","Citrus orange cake","Cake",126.0,"https://images.unsplash.com/photo-1557925923-cd4648e211a0?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Brownie Cake","Rich chocolate brownie","Cake",126.0,"https://images.unsplash.com/photo-1607920591413-4ec007e70023?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Chocolate Cake","Classic chocolate cake","Cake",231.0,"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("White Forest","White chocolate forest cake","Cake",210.0,"https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Black Forest","Classic black forest cake","Cake",210.0,"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Tiramisu","Italian coffee dessert","Cake",231.0,"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Caramel","Caramel cake","Cake",231.0,"https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Millifoni","Layered puff pastry cake","Cake",231.0,"https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?auto=format&fit=crop&w=900&q=85",true));
   
   // COLD DRINKS
   repo.save(new MenuItem("Soft Drink","Assorted soft drinks","Cold Drinks",126.0,"https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Water","Bottled water","Cold Drinks",63.0,"https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Iced Latte","Cold espresso with milk","Cold Drinks",367.5,"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Iced Coffee","Refreshing iced coffee","Cold Drinks",336.0,"https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Spris Juice","Sprite juice blend","Cold Drinks",367.5,"https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Special Juice","House special juice","Cold Drinks",420.0,"https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Milk Shake","Creamy milk shake","Cold Drinks",472.5,"https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Strawberry Shake","Fresh strawberry shake","Cold Drinks",420.0,"https://images.unsplash.com/photo-1568901839119-631418a3910b?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Mango Shake","Tropical mango shake","Cold Drinks",420.0,"https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Avocado Shake","Creamy avocado shake","Cold Drinks",420.0,"https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Papaya Shake","Sweet papaya shake","Cold Drinks",420.0,"https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Ambo Water","Sparkling mineral water","Cold Drinks",136.5,"https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9f?auto=format&fit=crop&w=900&q=85",true));
   
   // BREAKFAST
   repo.save(new MenuItem("Pancake With Syrup / Honey","Fluffy pancakes with syrup or honey","Breakfast",420.0,"https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Special Fatira","Special Ethiopian flatbread","Breakfast",577.5,"https://images.unsplash.com/photo-1587241321921-91a834d82d90?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Chechebsa","Traditional Ethiopian breakfast","Breakfast",420.0,"https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Special Chechebsa","Premium chechebsa with extras","Breakfast",525.0,"https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Ful","Traditional fava bean dish","Breakfast",315.0,"https://images.unsplash.com/photo-1555210530-9e885e1dc0a2?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Special Ful","Enhanced ful with toppings","Breakfast",420.0,"https://images.unsplash.com/photo-1555210530-9e885e1dc0a2?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Avocado Toast","Smashed avocado on toast","Breakfast",420.0,"https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("French Toast","Classic French toast","Breakfast",420.0,"https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Crepes with single scoop","Crepes with one scoop of ice cream","Breakfast",882.0,"https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Crepes with double scoop","Crepes with two scoops of ice cream","Breakfast",1212.75,"https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Waffle With Single Scoop","Waffle with one scoop of ice cream","Breakfast",882.0,"https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Waffle With Double Scoop","Waffle with two scoops of ice cream","Breakfast",1212.75,"https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Waffle With Syrup / Honey","Waffle with syrup or honey","Breakfast",420.0,"https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Waffle With Chocolate","Chocolate drizzled waffle","Breakfast",420.0,"https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Brownie W. Single Scoop","Brownie with one scoop of ice cream","Breakfast",651.0,"https://images.unsplash.com/photo-1607920591413-4ec007e70023?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Brownie With Double Scoop","Brownie with two scoops of ice cream","Breakfast",981.23,"https://images.unsplash.com/photo-1607920591413-4ec007e70023?auto=format&fit=crop&w=900&q=85",true));
   
   // LUNCH
   repo.save(new MenuItem("Vegetable Pizza","Fresh vegetable pizza","Lunch",682.5,"https://images.unsplash.com/photo-1511689660979-10d2b1aada49?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Margerita Pizza","Classic margerita pizza","Lunch",1050.0,"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Chicken Pizza","Chicken topped pizza","Lunch",1155.0,"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Beef Pizza","Beef topped pizza","Lunch",1102.5,"https://images.unsplash.com/photo-1542574621-e088a4464f7e?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Special Pizza","House special pizza","Lunch",1312.5,"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Salami Pizza","Italian salami pizza","Lunch",1627.5,"https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Tuna With Cheese Pizza","Tuna and cheese pizza","Lunch",1207.5,"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Tuna Pizza","Classic tuna pizza","Lunch",840.0,"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Fasting Salad","Vegan Ethiopian salad","Lunch",525.0,"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Chicken Salad","Fresh chicken salad","Lunch",787.5,"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Tuna Salad","Tuna salad","Lunch",735.0,"https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Spaghetti with veggie","Vegetable spaghetti","Lunch",472.5,"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Spaghetti with meat","Meat sauce spaghetti","Lunch",630.0,"https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Spaghetti with tomato sauce","Tomato sauce spaghetti","Lunch",525.0,"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Spaghetti with cream sauce","Creamy spaghetti","Lunch",682.5,"https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Lasagna/Pesto","Lasagna with pesto","Lunch",945.0,"https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Togliatelle","Fresh togliatelle pasta","Lunch",735.0,"https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Spaghetti with pesto sauce","Pesto spaghetti","Lunch",577.5,"https://images.unsplash.com/photo-1627662168781-d094d86b7b8d?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Chicken Burger","Juicy chicken burger","Lunch",1102.5,"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Mini Cheese Burger","Small cheese burger","Lunch",892.5,"https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Mini Beef Burger","Small beef burger","Lunch",787.5,"https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Mini Special Burger","Small special burger","Lunch",997.5,"https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=85",true));
   
   // SANDWICHES & WRAPS
   repo.save(new MenuItem("Veggie Wrap","Fresh vegetable wrap","Sandwiches & Wraps",577.5,"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Chicken Wrap","Grilled chicken wrap","Sandwiches & Wraps",945.0,"https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Egg Sandwich","Classic egg sandwich","Sandwiches & Wraps",420.0,"https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Special Egg Sandwich","Enhanced egg sandwich","Sandwiches & Wraps",525.0,"https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Club Sandwich","Triple decker club sandwich","Sandwiches & Wraps",945.0,"https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Special Wrap","House special wrap","Sandwiches & Wraps",1155.0,"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Tuna Wrap","Tuna salad wrap","Sandwiches & Wraps",735.0,"https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Tuna sandwich","Tuna sandwich","Sandwiches & Wraps",682.5,"https://images.unsplash.com/photo-1612240498303-7b1cf6d29e48?auto=format&fit=crop&w=900&q=85",true));
   
   // EXTRA
   repo.save(new MenuItem("Mayonnaise","Extra mayonnaise","Extra",73.5,"https://images.unsplash.com/photo-1471967183320-ee018f6e114a?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Egg","Extra egg","Extra",42.0,"https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Honey","Extra honey","Extra",42.0,"https://images.unsplash.com/photo-1587049352846-4a222e784238?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Tuna","Extra tuna","Extra",126.0,"https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Cheese","Extra cheese","Extra",105.0,"https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("French fries","Side of french fries","Extra",315.0,"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",true));
   
   // BOXES
   repo.save(new MenuItem("Takeaway Box 500g","500g takeaway box","Boxes",105.0,"https://images.unsplash.com/photo-1562424801-5aa38c96c3b3?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Takeaway Box 750g","750g takeaway box","Boxes",126.0,"https://images.unsplash.com/photo-1562424801-5aa38c96c3b3?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Takeaway Box 1kg","1kg takeaway box","Boxes",178.5,"https://images.unsplash.com/photo-1562424801-5aa38c96c3b3?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Takeaway Alu 500g","500g aluminum container","Boxes",52.5,"https://images.unsplash.com/photo-1610779556235-82e6d165e498?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Takeaway Alu 1kg","1kg aluminum container","Boxes",105.0,"https://images.unsplash.com/photo-1610779556235-82e6d165e498?auto=format&fit=crop&w=900&q=85",true));
   
   // HOT DRINKS
   repo.save(new MenuItem("Macchiato","Espresso with foam","Hot Drinks",168.0,"https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Fasting Macchiato","Dairy-free macchiato","Hot Drinks",210.0,"https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Tea","Traditional tea","Hot Drinks",84.0,"https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Special Tea","House special tea","Hot Drinks",210.0,"https://images.unsplash.com/photo-1597318132469-b3c6a2c8f1d5?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Flavored Tea","Flavored tea selection","Hot Drinks",105.0,"https://images.unsplash.com/photo-1597318132469-b3c6a2c8f1d5?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Coffee","Traditional Ethiopian coffee","Hot Drinks",147.0,"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Milk","Fresh milk","Hot Drinks",126.0,"https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Tea With Coffee","Tea and coffee blend","Hot Drinks",168.0,"https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Coffee Latte","Espresso with steamed milk","Hot Drinks",189.0,"https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Cappuccino","Espresso with foam","Hot Drinks",231.0,"https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Hot Chocolate","Rich hot chocolate","Hot Drinks",283.5,"https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Espresso","Italian espresso shot","Hot Drinks",147.0,"https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Americano Coffee","Espresso with water","Hot Drinks",178.5,"https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Machi","Ethiopian coffee drink","Hot Drinks",189.0,"https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Caramel Macchiato","Caramel flavored macchiato","Hot Drinks",231.0,"https://images.unsplash.com/photo-1599750089934-27044d6e9df9?auto=format&fit=crop&w=900&q=85",true));
   repo.save(new MenuItem("Affogato","Ice cream with espresso","Hot Drinks",420.0,"https://images.unsplash.com/photo-1612201078868-84bcc7236726?auto=format&fit=crop&w=900&q=85",true));
  }
 };}



}
