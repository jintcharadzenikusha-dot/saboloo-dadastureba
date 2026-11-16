# MediCare — Telemedicine & Clinic Management System

React + TypeScript სასწავლო frontend დემო.

## გაშვება

```bash
npm install
npm run dev
npm run build
```

Node.js 20.19+ ან 22.12+.

## გუნდური სტრუქტურა

- Student 1 — ექიმების დირექტორია (`src/features/doctors`).
- Student 2 — დაჯავშნა (`src/features/booking`).
- Student 3 — სამედიცინო ბარათი და ჩატი (`src/features/records`).

საერთო App ავტომატურად აღმოაჩენს მოდულებს Vite import.meta.glob-ით. საერთო ფაილები, მონაცემები და Redux store არის main-ის ინფრასტრუქტურა. სტუდენტებმა ცვლილებები მხოლოდ საკუთარ ფაილებში შეიტანონ. თითოეული ბრენჩი შეიქმნას ერთი და იმავე main-იდან. ინდივიდუალური აღწერები არის docs/student-*.md.

რეალური მონაცემები არ შეიყვანოთ: Backend არ არსებობს, მონაცემები გამოგონილია.
