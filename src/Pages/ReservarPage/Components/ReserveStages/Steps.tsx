"use client";

import { motion, AnimatePresence, useAnimation, scale } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ShoppingCart,
  User,
  CheckCircle,
  Plus,
  Minus,
  ArrowLeft,
  ArrowRight,
  icons,
} from "lucide-react";
import { GaletosPattern } from "../../../../GlobalComponents/GaletoPattern";
import { Card, CardContent } from "../../../../GlobalComponents/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../GlobalComponents/Select";
import { Label } from "../../../../GlobalComponents/Label";
import Input from "../../../../GlobalComponents/Input";
import { TextArea } from "../../../../GlobalComponents/Textarea";
import Inputmask from "inputmask";
import ModalConfirmation from "../modal/modalConfirmation";

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

export default function Steps() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleConfirmateOrder = () => {
    setIsModalOpen(true);
    setMessage("Pedido confirmado com sucesso!");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const phoneRef = useRef<HTMLInputElement>(null);

  const [isDelivery, setIsDelivery] = useState(false);

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
      setCurrentStep(currentStep - 1);
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
    setMessage("Pedido enviado com sucesso!");
    setIsModalOpen(true);
  };

  return (
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
                  <Card className="bg-[#FFF9F0] relative border-[#E8D8C0] hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={item.image || "https://via.placeholder.com/150"}
                          alt={item.name}
                          width={400}
                          height={200}
                          className="w-full group relative h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        <div
                          style={{ zIndex: 1 }}
                          className=" bg-[#F5DEB3] border-b border-[#5E2612] rounded-br-lg absolute top-[-6px] px-6 transition-all duration-300 easy-in-out -left-6 transform group-hover:scale-105 bg-[#E8D8C0] transition-opacity duration-300 flex items-center justify-center"
                        >
                          <span className="text-[#8B4513]">
                            {item.quantity}{" "}
                          </span>{" "}
                          &nbsp; Restante
                        </div>
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
                                  onClick={() => removeFromOrder(item.id)}
                                  className="p-3 md:p-2  cursor-pointer bg-[#8B4513] text-[#8B4513] hover:scale-105 hover:bg-[#8B4513] rounded-xl transition-all duration-300 easy-in-out active:scale-90"
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
                                  className="p-3 md:p-2 focus:border-white-900 bg-[#8B4513] cursor-pointer text-[#8B4513] hover:scale-105 hover:bg-[#8B4513] rounded-xl transition-all duration-300 easy-in-out active:scale-90"
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
                                className="bg-[#8B4513]/90 text-[#3E2723] font-semibold font-serif  focus:outline-white cursor-pointer px-4 py-2 rounded-xl hover:bg-[#8B4513]/90 hover:text-white transition-all duration-300 easy-in-out active:scale-95"
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
                  <h3 className="text-xl text-center  font-Inter font-bold text-[#8B4513] mb-4">
                    SEU <span className="text-[#DAA520]">PEDIDO</span>
                  </h3>
                  {orderItems.length === 0 ? (
                    <p className="text-md font-semibold text-center text-[#8B4513] mb-4">
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
                                  {item.price.toFixed(2).replace(".", ",")}
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
                          key={getTotalPrice().toFixed(2).replace(".", ",")}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="text-xl font-bold text-[#8B4513]"
                        >
                          R$ {getTotalPrice().toFixed(2).replace(".", ",")}
                        </motion.span>
                      </div>
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        onClick={nextStep}
                        disabled={orderItems.length === 0}
                        className="border-b-2 border-l-.5 cursor-pointer border-r-.5 w-full bg-[#DAA520] rounded-xl shadow-xl text-[#5E2612] px-4 py-2 hover:bg-[#DAA520]/90 flex justify-between items-center transition-all duration-300 easy-in-out active:scale-95"
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
          <Card className="bg-[#FFF9F0]  border-[#E8D8C0]">
            <CardContent className="p-8 relative">
              <div className="flex justify-center mb-24">
                <h2 className="text-3xl font-bold text-[#8B4513] font-serif text-center">
                  Suas Informações
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#3E2723]">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    placeholder="Digite seu nome completo"
                    value={customerInfo.name}
                    onChange={(e) =>
                      handleCustomerInfoChange("name", e.target.value)
                    }
                    type="text"
                    className="bg-[#F8F3E9] border-[#8B4513] focus:border-[#E8D8C03]"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="appearance-none border-[#8B4513] bg-[#F8F3E9] focus:border-[#8B4513] E8D8C0ext-[#3E2723]"
                  >
                    Telefone{" "}
                  </Label>
                  <Input
                    ref={phoneRef}
                    placeholder="(00) 00000-0000"
                    className="border-[#8B4513] focus:border-[#8B4513E8D8C0 bg-[#F8F3E9] appearance-none"
                    id="phone"
                    value={customerInfo.phone}
                    onFocus={() => {
                      if (phoneRef.current) {
                        Inputmask({
                          mask: "(99) 99999-9999",
                          placeholder: "_",
                          clearIncomplete: true,
                        }).mask(phoneRef.current);
                      }
                    }}
                    onChange={(e) =>
                      handleCustomerInfoChange("phone", e.target.value)
                    }
                    // className="bg-[#F8F3E9] border-[#8B4513] focus:border-[#E8D8C03]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[#3E2723]">
                    E-mail <span>(Opcional)</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={customerInfo.email}
                    onChange={(e) =>
                      handleCustomerInfoChange("email", e.target.value)
                    }
                    className="bg-[#F8F3E9] border-[#8B4513] focus:border-[#E8D8C03]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="Delivery" className="text-[#3E2723]">
                    É para entrega?{" "}
                  </Label>

                  <div className="flex gap-4">
                    <label className="flex items center gap-2">
                      <input
                        type="radio"
                        name="Delivery"
                        checked={isDelivery === true}
                        onChange={() => setIsDelivery(true)}
                      />
                      Sim
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="Delivery"
                        checked={isDelivery === false}
                        onChange={() => setIsDelivery(false)}
                      />
                      Não
                    </label>
                  </div>
                </div>

                {isDelivery === true ? (
                  <div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address" className="text-[#3E2723]">
                        Endereço de entrega
                      </Label>
                      <Input
                        id="address"
                        placeholder="Rua, número, bairro, cidade"
                        value={customerInfo.address}
                        onChange={(e) =>
                          handleCustomerInfoChange("address", e.target.value)
                        }
                        className="bg-[#F8F3E9] border-[#8B4513] focus:border-[#E8D8C03]"
                      />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <div className="space-y-2 flex-1 w-full">
                  <Label htmlFor="deliveryTime" className="text-[#3E2723]">
                    Horário de {isDelivery === true ? "entrega" : "busca"}
                  </Label>
                  <Select
                    value={customerInfo.deliveryTime}
                    onValueChange={(value) =>
                      handleCustomerInfoChange("deliveryTime", value)
                    }
                  >
                    <SelectTrigger className="bg-[#F8F3E9] border-[#8B4513] focus:border-[#E8D8C0]">
                      <SelectValue placeholder="Selecione o horário" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="08:00">10:30</SelectItem>
                      <SelectItem value="09:00">11:00</SelectItem>
                      <SelectItem value="10:00">11:30</SelectItem>
                      <SelectItem value="11:00">12:00</SelectItem>
                      <SelectItem value="12:00">12:30</SelectItem>
                      <SelectItem value="13:00">13:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="paymentMethod" className="text-[#3E2723]">
                    Forma de pagamento{" "}
                    <span className="">
                      {" "}
                      <span className="text-red-900">!</span>{" "}
                      <span className="text-gray-500 text-xs">
                        Pagamento somente na loja
                      </span>{" "}
                      <span className="text-red-900">!</span>{" "}
                    </span>
                  </Label>
                  <Select
                    value={customerInfo.paymentMethod}
                    onValueChange={(value) =>
                      handleCustomerInfoChange("paymentMethod", value)
                    }
                  >
                    <SelectTrigger className="bg-[#F8F3E9] border-[#8B4513] focus:border-[#E8D8C0]">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dinheiro">Dinheiro</SelectItem>
                      <SelectItem value="cartao">Cartão</SelectItem>
                      <SelectItem value="pix">PIX</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="observations" className="text-[#3E2723]">
                    Observações
                  </Label>

                  <TextArea
                    id="observations"
                    placeholder="Alguma observação especial para seu pedido?"
                    value={customerInfo.observations}
                    onChange={(e) =>
                      handleCustomerInfoChange("observations", e.target.value)
                    }
                    className="bg-[#DAA520]/40 border-[#E8D8C0] focus:border-[#8B4513]"
                    rows={3}
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  className="flex-1 p-2 active:scale-95 rounded-xl relative flex items-center justify-center border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513]/30"
                  onClick={prevStep}
                >
                  <ArrowLeft className="absolute w-4 h-4 left-2" />
                  Voltar
                </button>
                <button
                  className={`flex-1 p-2 active:scale-95 rounded-xl relative bg-[#DAA520] flex justify-center items-center text-[#5E2612] hover:bg-[#DAA520]/90 ${
                    !customerInfo.name ||
                    !customerInfo.phone ||
                    !customerInfo.deliveryTime ||
                    (isDelivery === true
                      ? !customerInfo.address
                      : customerInfo.address)
                      ? "bg-gray-400 text-gray-200 cursor-not-allowed hover:bg-gray-400"
                      : ""
                  }`}
                  onClick={nextStep}
                  disabled={
                    !customerInfo.name ||
                    !customerInfo.phone ||
                    !customerInfo.deliveryTime ||
                    (isDelivery === true ? !customerInfo.address : false)
                  }
                >
                  Continuar
                  <ArrowRight className="absolute w-4 h-4 right-2" />
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {currentStep === 3 && (
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#FFF9F0] border-[#FFF9F0]">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#8B4513] mb-8 font-serif text-center">
                CONFIRMAÇÃO DE <span className="text-[#DAA520]">PEDIDO</span>
                <motion.div
                  className="bg-[#5E2612] h-[1px]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 0.5 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#3E2723] mb-4">
                    Resumo do pedido
                  </h3>
                  <div className="space-y-3 mb-6">
                    {orderItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center p-3 bg-[#F8F3E9] rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-[#3E2723]">
                            {item.name}
                          </p>
                          <p className="text-sm text-[#A1887F]">
                            {item.quantity}x R${" "}
                            {item.price.toFixed(2).replace(".", ",")}
                          </p>
                        </div>
                        <span className="font-bold text-[#A1887F]">
                          R$
                          {(item.price * item.quantity)
                            .toFixed(2)
                            .replace(".", ",")}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[#E8D8C0] pt-4">
                    <div className="flex justify-between items-center text-xl font-bold text-[#8B4513]">
                      <span>Total:</span>
                      <span>
                        R$ {getTotalPrice().toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#DAA520] mb-4">
                    Dados da Entrega
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-[#F8F3E9] rounded-lg">
                      <p className="text-sm text-[#A1887F]">Nome</p>
                      <p className="font-medium text-[#3E2723]">
                        {customerInfo.name}
                      </p>
                    </div>
                    <div className="p-3 bg-[#F8F3E9] rounded-lg">
                      <p className="text-sm text-[#A1887F]">Telefone</p>
                      <p className="font-medium text-[#3E2723]">
                        {customerInfo.phone}
                      </p>
                    </div>
                    {customerInfo.address && (
                      <div className="p-3 bg-[#F8F3E9] rounded-lg">
                        <p className="text-sm text-[#A1887F]">Endereço</p>
                        <p className="font-medium text-[#3E2723]">
                          {customerInfo.address}
                        </p>
                      </div>
                    )}
                    <div className="p-3 bg-[#F8F3E9] rounded-lg">
                      <p className="text-sm text-[#A1887F]">Horário</p>
                      <p className="font-medium text-[#3E2723]">
                        {customerInfo.deliveryTime}
                      </p>
                    </div>
                    {customerInfo.paymentMethod && (
                      <div className="p-3 bg-[#F8F3E9] rounded-lg">
                        <p className="text-sm text-[#A1887F]">Pagamento</p>
                        <p className="font-medium text-[#3E2723]">
                          {customerInfo.paymentMethod.toUpperCase()}
                        </p>
                      </div>
                    )}
                    {customerInfo.observations && (
                      <div className="p-3 bg-[#F8F3E9] rounded-lg">
                        <p className="text-sm text-[#A1887F]">Observações</p>
                        <p className="font-medium text-[#3E2723]">
                          {customerInfo.observations}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  className="flex-1 p-2 rounded-xl hover:bg-[#DAA520] active:scale-95 hover:text-[#5E2612] bg-[#8B4513]/30 relative flex items-center justify-center border-[#8B4513] transition-all duration-300 easy-in-out text-[#8B4513] "
                  onClick={prevStep}
                >
                  <ArrowLeft className="absolute w-4 h-4 left-2" />
                  Voltar
                </button>
                <button
                  className="flex-1 p-2 rounded-xl relative bg-[#DAA520] active:scale-95 flex justify-center items-center text-[#5E2612] hover:bg-[#DAA520]/90"
                  onClick={handleSubmitOrder}
                >
                  Confirmar
                  <CheckCircle className="absolute w-4 h-4 right-2" />
                </button>
                <ModalConfirmation
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  message={message}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </AnimatePresence>
  );
}
