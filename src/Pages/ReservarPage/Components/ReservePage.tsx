"use client";

import { motion, AnimatePresence, useAnimation, scale } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../GlobalComponents/Select";
import { Label } from "../../../GlobalComponents/Label";
import Input from "../../../GlobalComponents/Input";
import { TextArea } from "../../../GlobalComponents/Textarea";
import Inputmask from "inputmask";
import { Item } from "@radix-ui/react-select";
import ModalConfirmation from "./modal/modalConfirmation";
import Steps from "./ReserveStages/Steps";

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
    <>
      <div className="flex min-h-screen flex-col bg-[#F8F3E9] overflow-hidden relative">
        <main className="flex-1 p-12 bg-gradient-to-b from-[#F8F3E9] to-[#F5DEB3]/30 relative z-10">
          <div className="mx-auto px-4">
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
              <Steps/>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </>
  );
}
