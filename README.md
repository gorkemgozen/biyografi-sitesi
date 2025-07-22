# Basit Profil/Biyografi Web Sitesi

Bu websiteyi ortalama 1 sene önce eğitimci bir müşterim için yapmıştım ama script kullanılmadığı için paylaşmaya karar verdim.  
Site sadece HTML5 ve CSS kullanılarak oluşturulmuştur. **JavaScript içermemektedir.**

## 🚀 Özellikler

- 3 adet sayfa
- Responsive (mobil uyumlu) tasarım
- Basit ve temiz kullanıcı arayüzü
- Hakkımda/Biyografi içeriği
- Sosyal medya bağlantılarına uygun yapı

## 📂 Proje Yapısı
- **./server.js** dosyası sitenin çalışması için gereken yegane dosyadır. Sayfaların varlığı bu dosyayla tanımlanır ve sitenin hangi portta çalışacağı bu dosyadan belirlenir.  
- **./_app** içerisinde sitenin kaynak dosyaları yer almaktadır.  
### _app Klasörü İçerisindeki Dosyaların Yapısı
- **./app/main.ejs** dosyası websitenizdeki sayfaların hepsinin oluştuğu yegane dosyadır. Navbar, Footer, Anasayfa vs. burada oluşturulur. Link tagleri ve script tagleri de burada yer almalıdır.
- **./app/immutable** içerisinde *assetsler* yer alır. resimlere ve CSS dosyalarına burdan ulaşabilirsiniz.   
  
- **./app/views** içerisinde sayfaların oluşması için gereken dosyalar yer alır.
### _app/views Klasörü İçerisindeki Dosyaların Yapısı
- **./app/views/pages** bünyesinde sayfaların basitçe HTML içerikleri vardır. **Buradaki dosyaların *.ejs* formatlı olması zorunludur.**  
- **./app/views/partials** klasörü içerisinde sitenin Footer ve Navbar dosyaları yer alır.  
- **./app/views/routes** klasörü içerisindeki dosyalar bize bahsi geçen sayfanın Title taginde yer alacak yazıyı ve sayfanın dosya konumunu sağlamaktadır.

## 🔧 Siteyi Nasıl Çalıştırabilirsiniz
1. Projenin kök klasöründe CMD'yi açıp **node server.js** yazarak 80 portunda çalıştırabilirsiniz.
2. Eğer 80 Portunda çalıştırmak istemiyorsanız *./server.js* dosyasını editleyerek istediğiniz portta çalıştırabilirsiniz 

## 📃 Yeni Sayfa Nasıl Eklenir
1. **./server.js** dosyası içerisinde yeni sayfa route tanımlıyoruz.  
2. **./_app/pages** içerisine yapacağımız sayfanın *.ejs* formatında HTML tasarımını yapıyoruz.  
3. **./app/routes** içine yeni dosya oluşturuyoruz. Ardından diğer route dosyalarındaki kod yapısını oluşturduğumuz dosyaya yapıştırıp *title* kısmını ekleyeceğimiz sayfa adı yapıyoruz ve *content* kısmına *.ejs* şeklinde tasarımın dosya konumunu giriyoruz. 
