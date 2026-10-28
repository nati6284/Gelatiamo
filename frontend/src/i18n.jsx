import { createContext, useContext, useMemo, useState } from 'react'
const words = {
  en: {
    home:'Home', menu:'Menu', story:'Our story', contact:'Contact', reserve:'Reserve a table', order:'Order now', locations:'Locations',
    eyebrow:'A little everyday magic', headline:'Made with care.\nServed with heart.', intro:'Authentic Italian gelato, fresh flavors, and a welcoming place to enjoy sweet moments.',
    explore:'Explore the menu', favorites:'Guest favorites', favoritesSub:'A few delicious reasons to visit.', viewMenu:'View full menu',
    storyTitle:'A place to feel at home', storyText:'We believe the best moments happen around a scoop: a first taste, a sweet conversation, a treat shared with people you love.',
    fresh:'Freshly prepared', freshText:'Made daily with carefully selected ingredients and traditional Italian methods.',
    local:'Italian tradition', localText:'Celebrating authentic gelato-making culture with Ethiopian hospitality.',
    menuTitle:'Something for every mood', menuSub:'Browse our gelato flavors and treats.', all:'All', add:'Add to cart',
    cart:'Your order', empty:'Your cart is waiting for something delicious.', checkout:'Place order', name:'Your name', phone:'Phone number',
    orderType:'Order type', pickup:'Pickup', delivery:'Delivery', address:'Delivery address', notes:'Notes for the kitchen', total:'Total',
    reservationTitle:'Save your seat', reservationSub:'Send a reservation request and our team will confirm it.',
    date:'Date', time:'Time', guests:'Guests', message:'Special request', submitReservation:'Request a table',
    contactTitle:'Come say hello', hours:'Opening hours', location:'Find us', whatsapp:'Chat on WhatsApp',
    footer:'Good food. Great coffee. Beautiful moments.', admin:'Admin', qrTitle:'Scan. Browse. Enjoy.', qrSub:'Scan this code to open our digital menu on your phone.',
    successOrder:'Order submitted! Our team will contact you to confirm.', successReservation:'Reservation request sent. We will contact you to confirm.',
    failed:'Something went wrong. Please try again.', 
    categories:{
      Coffee:'Coffee',
      Food:'Food',
      Dessert:'Dessert',
      Juice:'Juice',
      Gelato:'Gelato',
      Drinks:'Drinks',
      Breakfast:'Breakfast',
      Torta:'Torta',
      Boxes:'Boxes',
      'Ice Cream':'Ice Cream',
      Cakes:'Cakes',
      'Cold Drinks':'Cold Drinks',
      'Hot Drinks':'Hot Drinks'
    }
  },
  am: {
    home:'መነሻ', menu:'ምናሌ', story:'ስለ እኛ', contact:'አድራሻ', reserve:'ጠረጴዛ ይያዙ', order:'አሁን ይዘዙ', locations:'ቦታዎች',
    eyebrow:'የዕለት ደስታ', headline:'በፍቅር ተዘጋጅቶ።\nበልብ ይቀርባል።', intro:'ትክክለኛ የጣሊያን ጀላቶ፣ ትኩስ ጣዕም እና ጣፋጭ ጊዜያትን ለመደሰት ምቹ ቦታ።',
    explore:'ምናሌውን ይመልከቱ', favorites:'ተወዳጅ ምርጫዎች', favoritesSub:'ሊጎበኙን የሚያነሳሱ ጣፋጭ ምርጫዎች።', viewMenu:'ሙሉ ምናሌ',
    storyTitle:'እንደ ቤት የሚሰማ ቦታ', storyText:'ምርጥ ጊዜዎች በጣፋጭ ጣዕም ዙሪያ ይፈጠራሉ ብለን እናምናለን።',
    fresh:'ትኩስ ዝግጅት', freshText:'በየቀኑ በጥንቃቄ ከተመረጡ ግብዓቶች እና ባህላዊ የጣሊያን ዘዴዎች ይዘጋጃል።',
    local:'የጣሊያን ባህል', localText:'ትክክለኛ የጀላቶ አሰራር ባህልን በኢትዮጵያ አቀባበል እናከብራለን።',
    menuTitle:'ለሁሉም ስሜት የሚሆን', menuSub:'የጀላቶ ጣዕሞቻችንን እና ጣፋጮቻችንን ይመልከቱ።', all:'ሁሉም', add:'ወደ ቅርጫት',
    cart:'ትዕዛዝዎ', empty:'ቅርጫትዎ ጣፋጭ ምርጫ ይጠብቃል।', checkout:'ትዕዛዝ ይላኩ', name:'ሙሉ ስም', phone:'ስልክ ቁጥር',
    orderType:'የትዕዛዝ አይነት', pickup:'በአካል መውሰድ', delivery:'ማድረስ', address:'የማድረሻ አድራሻ', notes:'ለማዘጋጃ ማስታወሻ', total:'ጠቅላላ',
    reservationTitle:'ጠረጴዛ ይያዙ', reservationSub:'የያዙትን ጥያቄ ይላኩ፤ ቡድናችን ያረጋግጥልዎታል።',
    date:'ቀን', time:'ሰዓት', guests:'ሰዎች', message:'ልዩ ጥያቄ', submitReservation:'ጠረጴዛ ይጠይቁ',
    contactTitle:'ይጎብኙን', hours:'የሥራ ሰዓት', location:'አድራሻችን', whatsapp:'በዋትስአፕ ያነጋግሩን',
    footer:'ጥሩ ምግብ። ጥሩ ቡና። ውብ ጊዜያት።', admin:'አስተዳዳሪ', qrTitle:'ይቃኙ። ይመልከቱ። ይደሰቱ።', qrSub:'ዲጂታል ምናሌውን በስልክዎ ለመክፈት ይህን ኮድ ይቃኙ።',
    successOrder:'ትዕዛዝዎ ተልኳል! ቡድናችን ለማረጋገጥ ያነጋግርዎታል።', successReservation:'የጠረጴዛ ጥያቄዎ ተልኳል። ለማረጋገጥ እንደውልልዎታለን።',
    failed:'ችግር ተፈጥሯል። እንደገና ይሞክሩ።', 
    categories:{
      Coffee:'ቡና',
      Food:'ምግብ',
      Dessert:'ጣፋጭ',
      Juice:'ጭማቂ',
      Gelato:'ጀላቶ',
      Drinks:'መጠጥ',
      Breakfast:'ቁርስ',
      Torta:'ቶርታ',
      Boxes:'ሳጥኖች',
      'Ice Cream':'አይስክሬም',
      Cakes:'ኬኮች',
      'Cold Drinks':'ቀዝቃዛ መጠጦች',
      'Hot Drinks':'ሙቅ መጠጦች'
    }
  }
}
const Ctx = createContext(null)
export function I18nProvider({children}) {
  const [lang,setLang] = useState('en')
  const value = useMemo(()=>({lang,setLang,t: key => key.split('.').reduce((a,k)=>a?.[k],words[lang]) ?? key}),[lang])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
export const useI18n = () => useContext(Ctx)
