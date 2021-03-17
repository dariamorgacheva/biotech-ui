//let request = require('./companies.json')
let companyNames = ['Inova Health Care Services', 'DUSA Pharmaceuticals', 'ViraCor Laboratories', 'bluebird bio', 'Astellas Pharma Europe', 'Replimune Inc', 'CareDx', 'Talaris Therapeutics', 'Atara Biotherapeutics', 'Natera', 'Pilloxa', 'Shire', 'Novartis', 'Veloxis Pharmaceuticals', 'Miltenyi Biomedicine', 'Prometheus Laboratories', 'Transplant Genomics', 'Chong Kun Dang Pharmaceutical', 'Organ Recovery Systems', 'Astellas Pharma', 'Transplant Biomedicals', 'TransMedics', 'Intercept Pharmaceuticals', 'Target PharmaSolutions', 'Genfit', 'Hansa Biopharma', 'Accunea', 'Natera', 'AlloVir', 'Hookipa Biotech', 'Veloxis Pharmaceuticals', 'OrganOx', 'ExCellThera', 'XVIVO Perfusion', 'Incyte Corporation', 'BioFire Diagnostics', 'Ochsner Health System', 'Alexion Pharmaceuticals', 'Tarix Pharmaceuticals', 'Constant Therapeutics', 'Veloxis Pharmaceuticals', 'Minovia Therapeutics', 'Regimmune Corporation', 'CSL Behring', 'Sellas Life Sciences Group', 'Revimmune', 'Forge Biologics', 'Spectrum Pharmaceuticals', 'Bellicum Pharmaceuticals', 'Kaneka Pharma America', 'Zimmer Biomet'];

//                 function splitBy(data, splitter) {
//                 const result = []
//                 for (i=0; i < data.length; i++) {
//                   result.push(data[i][0].split(splitter));
//                 }
//                 return result

//                 } 

// var companyNames = splitBy(companyNames1, ' ,');


companyNames.forEach(e => {
 // element.forEach(e => {
     console.log(e.split(' ').join('&') + ', ')
     });

