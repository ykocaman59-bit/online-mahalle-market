// 1. Önce kullanıcıyı Supabase Auth sistemine kaydediyoruz
const { data, error: authError } = await supabase.auth.signUp({
  email: saticiEmail,
  password: saticiSifre,
});

if (authError) {
  alert('Kullanıcı oluşturulamadı: ' + authError.message);
  return;
}

// 2. Ardından market bilgilerini veritabanı tablosuna yazıyoruz
const { error: dbError } = await supabase
  .from('stores')
  .insert([
    { 
      name: marketAdi, 
      email: saticiEmail, 
      lat: enlem, 
      lng: boylam 
    }
  ]);

if (!dbError) {
  alert('Market ve Giriş Hesabı Başarıyla Oluşturuldu!');
}

