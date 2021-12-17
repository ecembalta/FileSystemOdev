import { writeFile } from 'fs';
import { readFile } from 'fs';
import { appendFile } from 'fs';
import { unlink } from 'fs';

// Dosya Yazma
// writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', err => {
//   if (err) console.log(err);
//   console.log('Dosyaya yazıldı');
// });

// Dosya Okuma
// readFile('employees.json', 'utf8', (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
//   console.log('Dosya Okundu');
// });

// Veri Eklemek
// appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 3000}', 'utf8', err => {
//   if (err) console.log(err);
//   console.log('Yeni Veri Eklendi');
// });

// Dosya Silme
// unlink('employees.json', err => {
//   if (err) console.log(err);
//   console.log('Dosya Silindi');
// });
