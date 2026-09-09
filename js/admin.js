// Market Kaydet Butonu Fonksiyonu
async function saveMarket(event) {
    if(event) event.preventDefault();

    const name = document.getElementById('storeName').value;
    const email = document.getElementById('storeEmail').value;
    const password = document.getElementById('storePassword').value;
    const lat = document.getElementById('storeLat').value;
    const lng = document.getElementById('storeLng').value;

    if (!email || !password) {
        alert("Lütfen e-posta ve şifre girin!");
        return;
    }

    if (password.length < 6) {
        alert("Şifre en az 6 karakter olmalıdır!");
        return;
    }

    // 1. Supabase Auth tarafında kullanıcıyı otomatik oluştur
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (authError) {
        alert("Giriş hesabı oluşturulamadı: " + authError.message);
        return;
    }

    // 2. Veritabanına market bilgilerini kaydet
    const { error: dbError } = await supabase
        .from('stores')
        .insert([
            { 
                name: name, 
                email: email, 
                lat: parseFloat(lat), 
                lng: parseFloat(lng) 
            }
        ]);

    if (dbError) {
        alert("Market tablosu hatası: " + dbError.message);
    } else {
        alert("Market ve Kullanıcı Hesabı Başarıyla Oluşturuldu!");
        location.reload(); // Sayfayı yenile
    }
}
