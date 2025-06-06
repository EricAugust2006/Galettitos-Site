"use client";

import { motion, AnimatePresence, useAnimation, scale } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Check,
  ShoppingCart,
  User,
  CheckCircle,
  Plus,
  Minus,
  ArrowLeft,
  ArrowRight,
  icons,
} from "lucide-react";
import { GaletosPattern } from "../../../GlobalComponents/GaletoPattern";
import { Header } from "./Header";
import { Card, CardContent } from "../../../GlobalComponents/card";

interface OrderList {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  deliveryTime: string;
  paymentMethod: string;
  observations: string;
}

export default function ReservePage() {
  // let [numero, setNumero] = useState(0);
  // const controls = useAnimation();

  const [isHovered, setIsHovered] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [orderItems, setOrderItems] = useState<OrderList[]>([]);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    phone: "",
    email: "",
    address: "",
    deliveryTime: "",
    paymentMethod: "",
    observations: "",
  });

  // useEffect(() => {
  //   controls.start({
  //     scale: [1, 1.15, 1],
  //     transition: {
  //       duration: 0.5,
  //     },
  //   });
  // }, [numero]);

  const menuItems: OrderList[] = [
    {
      id: 1,
      name: "Galeto Tradicional",
      description:
        "Nosso clássico galeto assado com temperos especiais, acompanha batatas rústicas e farofa.",
      price: 45.0,
      image: "https://picsum.photos/200/300?random=1",
      quantity: 0,
    },
    {
      id: 2,
      name: "Galeto com Uai/Iate 2L",
      description:
        "Nosso clássico galeto assado com temperos especiais, acompanha batatas rústicas, farofa e Uai/Iate 2L.",
      price: 55.0,
      image: "https://picsum.photos/200/300?random=2",
      quantity: 0,
    },
    {
      id: 3,
      name: "Galeto com Coca-Cola 2L",
      description:
        "Nosso clássico galeto assado com temperos especiais, acompanha batatas rústicas, farofa e Coca-Cola 2L.",
      price: 65.0,
      image: "https://picsum.photos/200/300?random=3",
      quantity: 0,
    },
    {
      id: 4,
      name: "Feijão Tropeiro",
      description: "Feijão preto com linguiça, bacon e cebola",
      price: 15.0,
      image: "https://picsum.photos/200/300?random=4",
      quantity: 0,
    },
    {
      id: 5,
      name: "Arroz de Pato",
      description: "Arroz de pato com linguiça e cebola",
      price: 20.0,
      image: "https://picsum.photos/200/300?random=5",
      quantity: 0,
    },
    {
      id: 6,
      name: "Bife a Parmegiana",
      description: "Bife a parmegiana com batata palha e salada",
      price: 35.0,
      image: "https://picsum.photos/200/300?random=6",
      quantity: 0,
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Escolha seus pratos",
      icon: <ShoppingCart className="w-5 h-5" />,
    },
    {
      number: 2,
      title: "Suas informações",
      icon: <User className="w-5 h-5" />,
    },
    {
      number: 3,
      title: "Confirmação",
      icon: <CheckCircle className="w-5 h-5" />,
    },
  ];

  const addToOrder = (item: OrderList) => {
    const existingItem = orderItems.find(
      (orderItem) => orderItem.id === item.id
    );
    if (existingItem) {
      setOrderItems(
        orderItems.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        )
      );
    } else {
      setOrderItems([...orderItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromOrder = (itemId: Number) => {
    const existingItem = orderItems.find(
      (orderItem) => orderItem.id === itemId
    );
    if (existingItem && existingItem.quantity > 1) {
      setOrderItems(
        orderItems.map((orderItem) =>
          orderItem.id === itemId
            ? { ...orderItem, quantity: orderItem.quantity - 1 }
            : orderItem
        )
      );
    } else {
      setOrderItems(orderItems.filter((orderItem) => orderItem.id !== itemId));
    }
  };

  const getItemQuantity = (itemId: number) => {
    const item = orderItems.find((orderItem) => orderItem.id === itemId);
    return item ? item.quantity : 0;
  };
  const getSumPrice = (itemId: number) => {
    const item = orderItems.find((item) => item.id === itemId);
    return item ? item.quantity * item.price : 0;
  };
  const getTotalPrice = () => {
    return orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return orderItems.reduce((total, item) => total + item.quantity, 0);
  };

  const nextStep = () => {
    console.log("foi certinho");
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
    console.log(currentStep);
    //quero ver dps qual numero eu vou estar passando
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleCustomerInfoChange = (
    field: keyof CustomerInfo,
    value: string
  ) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitOrder = () => {
    console.log("Pedido enviado:", {
      orderItems,
      customerInfo,
      total: getTotalPrice(),
    });
    // implementar logica aqui de enviar o form
    alert("Pedido enviado com sucesso!");
  };
  return (
    <>
      <div className="flex min-h-screen flex-col bg-[#F8F3E9] relative">
        <main className="flex-1 p-12 bg-gradient-to-b from-[#F8F3E9] to-[#F5DEB3]/30 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-12">
              <div className="flex items-center justify-center space-x-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    className="flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex flex-col items-center">
                      <motion.div
                        className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                          currentStep >= step.number
                            ? "bg-[#DAA520] text-[#F5DEB3] border-[#F5DEB3]"
                            : "bg-[#F5DEB3] text-[#F8F3E9] border-[#F8F3E9]"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {currentStep > step.number ? (
                          <Check className="w-6 h-6" />
                        ) : (
                          step.icon
                        )}
                      </motion.div>
                      <span
                        className={`mt-2 text-sm font-medium ${
                          currentStep >= step.number
                            ? "text-[#8B4513]"
                            : "text-[#A1887F]"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`w-24 h-0.5 mx-4 transition-colors duration-300 ${
                          currentStep > step.number
                            ? "bg-[#8B4513]"
                            : "bg-[#E8D8C0]"
                        }`}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  key="step1"
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-4 gap-8"
                >
                  <div className="lg:col-span-3">
                    <h2 className="text-3xl font-bold text-[#8B4513] mb-8 font-serif">
                      Escolha seus pratos favoritos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {menuItems.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Card className="bg-[#FFF9F0] border-[#E8D8C0] hover:shadow-lg transition-all duration-300 overflow-hidden group">
                            <CardContent className="p-0">
                              <div className="relative">
                                <img
                                  src={
                                    item.image ||
                                    "https://via.placeholder.com/150"
                                  }
                                  alt={item.name}
                                  width={400}
                                  height={200}
                                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="p-6">
                                <h3 className="text-xl font-bold text-[#8B4513] mb-2">
                                  {item.name}
                                </h3>
                                <p className="text-[#3E2723] text-sm mb-4"></p>
                                <div className="flex items-center justify-between">
                                  <span className="text-2xl font-bold text-[#8B4513]">
                                    R${item.price.toFixed(2).replace(".", ",")}
                                  </span>
                                  <div className="flex flex-center gap-3">
                                    {getItemQuantity(item.id) > 0 ? (
                                      <div className="flex transition-all duration-300 easy-in-out items-center gap-4">
                                        <motion.button
                                          whileHover={{ scale: 1.1 }}
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          exit={{ opacity: 0 }}
                                          transition={{
                                            duration: 0.5,
                                          }}
                                          onClick={() =>
                                            removeFromOrder(item.id)
                                          }
                                          className="p-3 md:p-2 bg-[#8B4513] text-[#8B4513] hover:scale-105 hover:bg-[#8B4513] rounded-xl transition-all duration-300 easy-in-out active:scale-90"
                                        >
                                          {/* //centrailizar */}
                                          <Minus className="text-white w-4 h-4" />
                                        </motion.button>
                                        <motion.span
                                          key={getItemQuantity(item.id)}
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          exit={{ opacity: 0 }}
                                          transition={{
                                            duration: 0.3,
                                          }}
                                          className="text-center w-5 font-bold text-[#8B4513]"
                                        >
                                          {getItemQuantity(item.id)}
                                        </motion.span>

                                        <motion.button
                                          whileHover={{ scale: 1.1 }}
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          exit={{ opacity: 0 }}
                                          transition={{
                                            duration: 0.5,
                                          }}
                                          onClick={() => addToOrder(item)}
                                          className="p-3 md:p-2 bg-[#8B4513] text-[#8B4513] hover:scale-105 hover:bg-[#8B4513] rounded-xl transition-all duration-300 easy-in-out active:scale-90"
                                        >
                                          <Plus className="text-white w-4 h-4" />
                                        </motion.button>
                                      </div>
                                    ) : (
                                      <motion.button
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                          duration: 0.5,
                                        }}
                                        className="bg-[#8B4513]/90 px-4 py-2 rounded-xl hover:bg-[#8B4513]/90 hover:text-white transition-all duration-300 easy-in-out active:scale-95"
                                        onClick={() => addToOrder(item)}
                                      >
                                        Adicionar
                                      </motion.button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="sticky top-32">
                      <Card className="bg-[#FFF9F0] border-[#E8D8C0] ">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-[#8B4513] mb-4">
                            Seu Pedido
                          </h3>
                          {orderItems.length === 0 ? (
                            <p className="text-xl font-bold text-[#8B4513] mb-4">
                              Nenhum item selecionado
                            </p>
                          ) : (
                            <>
                              <div className="space-y-3 mb-6">
                                {orderItems.map((item) => (
                                  <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    exit={{ opacity: 0 }}
                                  >
                                    <div
                                      className="relative gap-[4px] flex items-center justify-between"
                                      key={item.id}
                                    >
                                      <div className="">
                                        <p className="font-medium text-[#3E2723]">
                                          {item.name}
                                        </p>
                                        <p className="  text-sm text-[#A1887F]">
                                          {item.quantity}x{" "}
                                          {item.price
                                            .toFixed(2)
                                            .replace(".", ",")}
                                        </p>
                                      </div>
                                      <motion.span
                                        key={getSumPrice(item.id)}
                                        className="font-bold  text-[#8B4513]"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        R${""}
                                        {getSumPrice(item.id)
                                          .toFixed(2)
                                          .replace(".", ",")}
                                      </motion.span>

                                      <motion.div
                                        className="absolute h-[.5px] -bottom-1 w-full bg-black/50"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.2 }}
                                      />
                                    </div>
                                  </motion.div>
                                ))}
                              </div>

                              <div className="border-t border-[#E8D8C0] pt-4" />
                              <div className=" flex justify-between items-center mb-4">
                                <span className="text-lg font-bold text-[#8B4513]">
                                  Total:{" "}
                                </span>
                                <motion.span
                                  key={getTotalPrice()
                                    .toFixed(2)
                                    .replace(".", ",")}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.5 }}
                                  className="text-xl font-bold text-[#8B4513]"
                                >
                                  R${" "}
                                  {getTotalPrice().toFixed(2).replace(".", ",")}
                                </motion.span>
                              </div>
                              <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                onClick={nextStep}
                                disabled={orderItems.length === 0}
                                className="border-b-2 border-l-.5 border-r-.5 w-full bg-[#DAA520] rounded-xl shadow-xl text-[#5E2612] px-4 py-2 hover:bg-[#DAA520]/90 flex justify-between items-center transition-all duration-300 easy-in-out active:scale-95"
                              >
                                Continuar
                                <div className="flex items-center">
                                  {getTotalItems()}{" "}
                                  {getTotalItems() === 1 ? "Item" : "Items"}
                                  <ArrowRight className="w-6 h-6 ml-2" />
                                </div>
                              </motion.button>
                            </>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-4xl mx-auto"
                >
                  <Card className="bg-[#FFF9F0] border-[#E8D8C0]">
                    <CardContent className="p-8">
                      <h2 className="text-3xl font-bold text-[#8B4513] mb-8 font-serif text-center">
                        Suas Informações
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-[#3E2723]">
                            Nome Completo
                          </label>
                          <input
                            id="name"
                            placeholder="Digite seu nome completo"
                            value={customerInfo.name}
                            onChange={(e) =>
                              handleCustomerInfoChange("name", e.target.value)
                            }
                            type="text"
                            className="bg-[#F8F3E9] border-[#E8D8C0] focus:border-[#8B4513]"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-galeto-text">
                            Telefone
                          </label>
                          <input
                            id="phone"
                            placeholder="(00) 00000-0000"
                            value={customerInfo.phone}
                            onChange={(e) =>
                              handleCustomerInfoChange("phone", e.target.value)
                            }
                            className="bg-galeto-bg border-galeto-border focus:border-galeto-primary"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-galeto-text">
                            E-mail
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={customerInfo.email}
                            onChange={(e) =>
                              handleCustomerInfoChange("email", e.target.value)
                            }
                            className="bg-galeto-bg border-galeto-border focus:border-galeto-primary"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </>
  );
}
