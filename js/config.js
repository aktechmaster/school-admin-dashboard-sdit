// URL Backend DB_Administrasi (Utama/Master)
let GAS_URL = localStorage.getItem('SDIT_GAS_URL') || 'https://script.google.com/macros/s/AKfycbxR6Gvmf-mTd9uyjNzbFjnlO9epUAl3GdAt1-gUyIDQaIvK_la9RRgwBWulfpHz01lJxQ/exec';

// URL Backend DB_Laporan (Khusus Laporan & Persentase Jurnal)
let GAS_LAPORAN_URL = localStorage.getItem('SDIT_GAS_LAPORAN_URL') || '';

let DB_JURNAL_ID = localStorage.getItem('SDIT_DB_JURNAL_ID') || '';

let localData = {
    Users: [],
    Guru: [],
    Siswa: [],
    Kelas: [],
    Mapel: [],
    Jadwal: [],
    Tim_Pengajar: [],
    Halaqoh_T2Q: [],
    Halaqoh_BPI: [],
    Hari_Efektif: []
};

const tableStates = {};

function getTableState(tableName) {
    if (!tableStates[tableName]) {
        tableStates[tableName] = {
            search: '',
            filters: {},
            currentPage: 1,
            pageSize: 10
        };
    }
    return tableStates[tableName];
}
