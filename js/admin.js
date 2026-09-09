async function saveMarket(event) {
    if (event) event.preventDefault();

    const name = document.getElementById('storeName').value;
    const email = document.getElementById('storeEmail').value;
    const password = document.getElementById('storePassword').value;
    const lat = document.getElementById('storeLat').value;
    const lng = document.getElementById('storeLng').value;

    if (!email || !password) {
        alert("Lütfen e-posta ve şifre alanlarını doldurun!");
        return;
    }

    if (password.length < 6) {
        alert("Şifre en az 6 karakter olmalıdır!");
        return;
    }

    // 1. AŞAMA: Auth Kullanıcısı Oluşturma
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (authError) {
        alert("Auth Hatası (Kullanıcı oluşturulamadı): " + authError.message);
        return;
    }

    // 2. AŞAMA: Veritabanına Market Ekleme
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
        alert("Veritabanı Hatası: " + dbError.message);
    } else {
        alert("Başarılı! Kullanıcı ve Market oluşturuldu.");
        location.reload();
    }
}
