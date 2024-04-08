-- CreateTable
CREATE TABLE "products" (
    "product_id" SERIAL NOT NULL,
    "product_name" VARCHAR(60) NOT NULL,
    "product_price" DECIMAL(10,2) NOT NULL,
    "product_images" TEXT NOT NULL,
    "product_available" BOOLEAN NOT NULL DEFAULT true,
    "product_description" VARCHAR(150) NOT NULL,
    "product_view_count" INTEGER NOT NULL DEFAULT 0,
    "product_created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "user_email" VARCHAR(70) NOT NULL,
    "user_name" VARCHAR(100) NOT NULL,
    "user_phone" VARCHAR(20) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "payment_methods" (
    "method_id" SERIAL NOT NULL,
    "method_name" VARCHAR(60) NOT NULL,

    CONSTRAINT "payment_methods_pkey" PRIMARY KEY ("method_id")
);

-- CreateTable
CREATE TABLE "product_purchases" (
    "purchase_id" SERIAL NOT NULL,
    "buyer_user" INTEGER NOT NULL,
    "product_sold" INTEGER NOT NULL,
    "amount_sold" DECIMAL(10,2) NOT NULL,
    "quantity_of_product" INTEGER NOT NULL,
    "pay_method" VARCHAR(60) NOT NULL,
    "transaction_datetime" TIMESTAMP(0) NOT NULL DEFAULT (now()),

    CONSTRAINT "product_purchases_pkey" PRIMARY KEY ("purchase_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email" ON "users"("user_email");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone" ON "users"("user_phone");

-- CreateIndex
CREATE UNIQUE INDEX "method_name" ON "payment_methods"("method_name");

-- CreateIndex
CREATE INDEX "buyer_user" ON "product_purchases"("buyer_user");

-- CreateIndex
CREATE INDEX "pay_method" ON "product_purchases"("pay_method");

-- CreateIndex
CREATE INDEX "product_sold" ON "product_purchases"("product_sold");

-- AddForeignKey
ALTER TABLE "product_purchases" ADD CONSTRAINT "product_purchases_ibfk_1" FOREIGN KEY ("buyer_user") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_purchases" ADD CONSTRAINT "product_purchases_ibfk_2" FOREIGN KEY ("product_sold") REFERENCES "products"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_purchases" ADD CONSTRAINT "product_purchases_ibfk_3" FOREIGN KEY ("pay_method") REFERENCES "payment_methods"("method_name") ON DELETE NO ACTION ON UPDATE NO ACTION;
