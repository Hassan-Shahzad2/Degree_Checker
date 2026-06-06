// ============================================================
// data.js — Shared simulated blockchain data & state
// BlockDegree — Iqra University Blockchain Security CCP
// ============================================================

const BLOCKCHAIN_DATA = {
  universities: [
    { id: "UNI001", name: "Iqra University",  address: "0xA1B2C3D4E5F6A1B2C3D4E5F6A1B2C3D4", verified: true,  degreesIssued: 3, contact: "registrar@iqra.edu.pk" },
    { id: "UNI002", name: "FAST-NUCES",       address: "0xB2C3D4E5F6A1B2C3D4E5F6A1B2C3D4E5", verified: true,  degreesIssued: 2, contact: "registrar@nu.edu.pk"   }
  ],
  students: [
    { id: "STU001", name: "Muhammad Hassan Shahzad", email: "hassan.shahzad@student.iqra.edu.pk", wallet: "0xSTU001MHSF67A2B3C4D5E6F7...", uniId: "UNI001", enrolled: "2020" },
    { id: "STU002", name: "Sara Khan",               email: "sara.khan@student.iqra.edu.pk",      wallet: "0xSTU002SKB2C3D4E5F6A7B8...", uniId: "UNI001", enrolled: "2020" },
    { id: "STU003", name: "Omar Farooq",             email: "omar.farooq@student.nu.edu.pk",      wallet: "0xSTU003OFC3D4E5F6A7B8C9...", uniId: "UNI002", enrolled: "2019" }
  ],
  employers: [
    { id: "EMP001", name: "TechCorp Ltd",    email: "hr@techcorp.com",     verified: true,  verifications: 2 },
    { id: "EMP002", name: "FinanceHub Inc",  email: "hr@financehub.com",   verified: true,  verifications: 2 }
  ],
  degrees: [
    { id: "DEG001", studentId: "STU001", uniId: "UNI001", program: "BSCS",  year: 2024, cgpa: "3.85", hash: "0xDEG001HASH_A1B2C3D4E5F6A1B2C3D4E5F6...", status: "valid",   txHash: "0xTX001A1B2C3...", timestamp: "2024-06-01 10:00", gasUsed: 21000 },
    { id: "DEG002", studentId: "STU002", uniId: "UNI001", program: "BSEE",  year: 2024, cgpa: "3.72", hash: "0xDEG002HASH_B2C3D4E5F6A1B2C3D4E5F6...", status: "valid",   txHash: "0xTX002B2C3D4...", timestamp: "2024-06-02 11:30", gasUsed: 21000 },
    { id: "DEG003", studentId: "STU003", uniId: "UNI002", program: "BSME",  year: 2023, cgpa: "3.60", hash: "0xDEG003HASH_C3D4E5F6A1B2C3D4E5F6...", status: "valid",   txHash: "0xTX003C3D4E5...", timestamp: "2023-12-15 09:15", gasUsed: 21000 },
    { id: "DEG004", studentId: "STU001", uniId: "UNI001", program: "MSCS",  year: 2024, cgpa: "3.91", hash: "0xDEG004HASH_D4E5F6A1B2C3D4E5F6A1...", status: "valid",   txHash: "0xTX004D4E5F6...", timestamp: "2024-07-20 14:00", gasUsed: 21000 },
    { id: "DEG005", studentId: "STU002", uniId: "UNI002", program: "MBA",   year: 2024, cgpa: "3.45", hash: "0xDEG005HASH_E5F6A1B2C3D4E5F6A1B2...", status: "revoked", txHash: "0xTX005E5F6A1...", timestamp: "2024-08-01 08:45", gasUsed: 21000 }
  ],
  verifications: [
    { id: "VER001", degreeId: "DEG001", empId: "EMP001", result: "verified", timestamp: "2024-09-01 10:00", txHash: "0xVTX001F1A2B3C4...", responseTime: "1.1s" },
    { id: "VER002", degreeId: "DEG003", empId: "EMP002", result: "verified", timestamp: "2024-09-03 14:20", txHash: "0xVTX002G2B3C4D5...", responseTime: "0.9s" },
    { id: "VER003", degreeId: "DEG005", empId: "EMP001", result: "revoked",  timestamp: "2024-09-05 09:10", txHash: "0xVTX003H3C4D5E6...", responseTime: "1.3s" },
    { id: "VER004", degreeId: "FAKE999", empId: "EMP002", result: "fraud",   timestamp: "2024-09-06 16:45", txHash: "0xVTX004I4D5E6F7...", responseTime: "0.7s", note: "Hash mismatch — degree not found on blockchain" }
  ],
  auditLogs: [
    { id: "LOG001", action: "DEGREE_ISSUED",       actor: "UNI001", target: "DEG001", timestamp: "2024-06-01 10:00", status: "success", txTime: "1.2s" },
    { id: "LOG002", action: "DEGREE_ISSUED",       actor: "UNI001", target: "DEG002", timestamp: "2024-06-02 11:30", status: "success", txTime: "1.1s" },
    { id: "LOG003", action: "DEGREE_ISSUED",       actor: "UNI002", target: "DEG003", timestamp: "2023-12-15 09:15", status: "success", txTime: "1.4s" },
    { id: "LOG004", action: "DEGREE_ISSUED",       actor: "UNI001", target: "DEG004", timestamp: "2024-07-20 14:00", status: "success", txTime: "1.0s" },
    { id: "LOG005", action: "DEGREE_ISSUED",       actor: "UNI002", target: "DEG005", timestamp: "2024-08-01 08:45", status: "success", txTime: "1.3s" },
    { id: "LOG006", action: "DEGREE_VERIFIED",     actor: "EMP001", target: "DEG001", timestamp: "2024-09-01 10:00", status: "success", txTime: "1.1s" },
    { id: "LOG007", action: "DEGREE_VERIFIED",     actor: "EMP002", target: "DEG003", timestamp: "2024-09-03 14:20", status: "success", txTime: "0.9s" },
    { id: "LOG008", action: "DEGREE_REVOKED",      actor: "UNI002", target: "DEG005", timestamp: "2024-09-04 11:00", status: "success", txTime: "1.5s" },
    { id: "LOG009", action: "VERIFICATION_FAIL",   actor: "EMP001", target: "DEG005", timestamp: "2024-09-05 09:10", status: "warning", txTime: "1.3s" },
    { id: "LOG010", action: "FRAUD_DETECTED",      actor: "EMP002", target: "FAKE999",timestamp: "2024-09-06 16:45", status: "danger",  txTime: "0.7s" },
    { id: "LOG011", action: "UNAUTHORIZED_ACCESS", actor: "UNKNOWN",target: "DEG002", timestamp: "2024-09-07 02:30", status: "danger",  txTime: "N/A"  }
  ],
  smartContracts: [
    { name: "DegreeContract",  address: "0xDEGCONTRACT001A1B2C3D4E5...", purpose: "Degree issuance & immutable storage", status: "active", lastTx: "2024-08-01", totalCalls: 5  },
    { name: "VerifyContract",  address: "0xVERIFYCONTRACT002B2C3D4E5F...", purpose: "Hash-based degree verification",   status: "active", lastTx: "2024-09-06", totalCalls: 4  },
    { name: "AccessContract",  address: "0xACCESSCONTRACT003C3D4E5F6A...", purpose: "RBAC permissions management",       status: "active", lastTx: "2024-06-01", totalCalls: 12 }
  ]
};

// Helper lookups
function getStudentName(id) {
  const s = BLOCKCHAIN_DATA.students.find(x => x.id === id);
  return s ? s.name : "Unknown";
}
function getUniName(id) {
  const u = BLOCKCHAIN_DATA.universities.find(x => x.id === id);
  return u ? u.name : "Unknown";
}
function getEmpName(id) {
  const e = BLOCKCHAIN_DATA.employers.find(x => x.id === id);
  return e ? e.name : "Unknown";
}
function getDegreeById(id) {
  return BLOCKCHAIN_DATA.degrees.find(d => d.id === id || d.hash.includes(id));
}