// Market Kaydet butonuna basıldığında çalışacak kod
async function handleAddStore(e) {
  e.preventDefault();

  const storeName = document.getElementById('storeName').value;
  const storeEmail = document.getElementById('storeEmail').value;
  const storePassword = document.getElementById('storePassword').value;
  const storeLat = document.getElementById('storeLat').value;
  const storeLng = document.getElementById('storeLng').value;

  // Şifre uzunluğu kontrolü
  if (storePassword.length < 6) {
    alert("Şifre en az 6 karakter olmalıdır!");
    return;
  }

  // 1. Supabase Auth sistemine satıcı kullanıcısını açıyoruz
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: storeEmail,
    password: storePassword,
  });

  if (authError) {
    alert("Kullanıcı kaydı hatası: " + authError.message);
    return;
  }

  // 2. Kullanıcı oluştuysa market verisini 'stores' tablosuna yazıyoruz
  const { error: dbError } = await supabase
    .from('stores')
    .insert([
      {
        name: storeName,
        email: storeEmail,
        lat: parseFloat(storeLat),
        lng: parseFloat(storeLng)
      }
    ]);

  if (dbError) {
    alert("Market tablosuna ekleme hatası: " + dbError.message);
  } else {
    alert("Market ve Giriş Hesabı Başarıyla Oluşturuldu!");
    // Formu temizle ve listeyi yenile
    document.getElementById('addStoreForm').reset();
    loadStores();
  }
}
