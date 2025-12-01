"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Calendar, ListTodo } from "lucide-react";
import { useOnboardingStore } from "@/hooks/useOnboardingStore";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const steps = [
    {
        id: 1,
        title: "Organiza tu vida",
        description: "Gestiona tus tareas diarias de manera eficiente y sin estrés.",
        icon: ListTodo,
        color: "bg-blue-500",
    },
    {
        id: 2,
        title: "Sincroniza todo",
        description: "Conecta con Google Calendar para no perderte ningún evento.",
        icon: Calendar,
        color: "bg-purple-500",
    },
    {
        id: 3,
        title: "Listo para empezar",
        description: "Toma el control de tu tiempo ahora mismo.",
        icon: Check,
        color: "bg-green-500",
    },
];

export default function Onboarding() {
    const [currentStep, setCurrentStep] = useState(0);
    const completeOnboarding = useOnboardingStore((state) => state.completeOnboarding);
    const router = useRouter();

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            completeOnboarding();
            router.push("/dashboard");
        }
    };

    const StepIcon = steps[currentStep].icon;

    return (
        <div className="fixed inset-0 bg-white dark:bg-neutral-950 flex flex-col items-center justify-center p-6 z-50">
            <div className="w-full max-w-md flex flex-col items-center text-center space-y-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center space-y-6"
                    >
                        <div className={cn("p-6 rounded-3xl shadow-xl", steps[currentStep].color)}>
                            <StepIcon className="w-12 h-12 text-white" />
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                                {steps[currentStep].title}
                            </h1>
                            <p className="text-neutral-500 dark:text-neutral-400 text-lg">
                                {steps[currentStep].description}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="flex items-center space-x-2">
                    {steps.map((_, index) => (
                        <div
                            key={index}
                            className={cn(
                                "h-2 rounded-full transition-all duration-300",
                                index === currentStep ? "w-8 bg-neutral-900 dark:bg-white" : "w-2 bg-neutral-200 dark:bg-neutral-800"
                            )}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="w-full py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                >
                    <span>{currentStep === steps.length - 1 ? "Comenzar" : "Siguiente"}</span>
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
