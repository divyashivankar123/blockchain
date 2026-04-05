const pkg = require("@prisma/client");
const { PrismaClient } = pkg;
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "file:./prisma/dev.db",
    },
  },
});

async function main() {
  console.log("Starting seed...");
  const adminEmail = "admin@fleetchain.com";
  const hashedPassword = await bcrypt.hash("Admin@123", 10);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      password: hashedPassword,
      name: "Fleet Admin",
      role: "admin",
    },
  });
  console.log(`Admin created: ${admin.email}`);

  // 1b. Create Driver
  const driverEmail = "driver@fleetchain.com";
  const driver = await prisma.user.upsert({
    where: { email: driverEmail },
    update: {},
    create: {
      email: driverEmail,
      password: hashedPassword,
      name: "Rajesh Patil",
      role: "driver",
    },
  });
  console.log(`Driver created: ${driver.email}`);

  // 1c. Create Vendor
  const vendorEmail = "vendor@fleetchain.com";
  const vendor = await prisma.user.upsert({
    where: { email: vendorEmail },
    update: {},
    create: {
      email: vendorEmail,
      password: hashedPassword,
      name: "AutoCare Services",
      role: "vendor",
    },
  });
  console.log(`Vendor created: ${vendor.email}`);

  // 1d. Create Sender
  const senderEmail = "sender@fleetchain.com";
  const sender = await prisma.user.upsert({
    where: { email: senderEmail },
    update: {},
    create: {
      email: senderEmail,
      password: hashedPassword,
      name: "Global Logistics Ltd.",
      role: "sender",
    },
  });
  console.log(`Sender created: ${sender.email}`);

  // 1e. Create Receiver
  const receiverEmail = "receiver@fleetchain.com";
  const receiver = await prisma.user.upsert({
    where: { email: receiverEmail },
    update: {},
    create: {
      email: receiverEmail,
      password: hashedPassword,
      name: "Retail Connect Hub",
      role: "receiver",
    },
  });
  console.log(`Receiver created: ${receiver.email}`);

  const vehicles = [
    { plateNumber: "MH31-AB-1234", status: "active" },
    { plateNumber: "MH12-CD-5678", status: "active" },
    { plateNumber: "MH04-EF-9012", status: "maintenance" },
  ];

  for (const v of vehicles) {
    const vehicle = await prisma.vehicle.upsert({
      where: { plateNumber: v.plateNumber },
      update: {},
      create: v,
    });
    console.log("Vehicle created:", vehicle.plateNumber);
  }

  console.log("Seeding finished successfully.");
}

main()
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
