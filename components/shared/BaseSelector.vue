<script setup lang="ts">
import { ref, watch } from "vue";

interface Option {
    label: string;
    value: string;
}

interface IProps {
    modelValue?: string;
    label?: string;
    placeholder?: string;
    id?: string;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    helperText?: string;
    name: string;
    options?: Option[];
}

const props = defineProps<IProps>();

const emit = defineEmits(["update:modelValue", "input"]);

const selectedValue = ref(props.modelValue || "");

watch(
    () => props.modelValue,
    (newValue) => {
        selectedValue.value = newValue;
    }
);

const onSelect = () => {
    emit("update:modelValue", selectedValue.value);
    emit("input", selectedValue.value);
};
</script>

<template>
    <div class="w-full">
        <label
            v-if="label"
            :for="id"
            class="block text-sm font-medium text-neutral/80 mb-1"
        >
            {{ label }}
            <span v-if="required" class="text-red-500">*</span>
        </label>
        <div class="relative">
            <select
                :id="id"
                v-model="selectedValue"
                :disabled="disabled"
                class="w-full px-4 py-3 rounded-md focus:outline-none appearance-none"
                :class="[
                    disabled
                        ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                        : 'bg-white text-neutral',
                    error
                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300',
                ]"
                @change="onSelect"
            >
                <option v-if="placeholder" disabled value="">
                    {{ placeholder }}
                </option>
                <option
                    v-for="option in props.options"
                    :key="option.value"
                    :value="option.value"
                >
                    {{ option.label }}
                </option>
            </select>
            <Icon
                name="fluent:chevron-down-20-regular"
                class="!size-6 text-neutral absolute top-1/2 -translate-y-1/2 right-4"
            />
        </div>
        <div class="mt-1">
            <p v-if="error" class="text-xs text-red-600">
                {{ error }}
            </p>
            <p v-if="helperText && !error" class="text-sm text-gray-500">
                {{ helperText }}
            </p>
        </div>
    </div>
</template>
