<script setup lang="ts">
interface IProps {
    modelValue?: string;
    label?: string;
    placeholder?: string;
    id?: string;
    disabled?: boolean;
    maxLength?: number;
    error?: string;
    helperText?: string;
    name: string;
    required?: boolean;
}

const props = defineProps<IProps>();

const emit = defineEmits(["update:modelValue", "input"]);

const inputValue = ref(props.modelValue || "");

watch(
    () => props.modelValue!,
    (newValue) => {
        inputValue.value = newValue;
    }
);

const onInput = () => {
    emit("update:modelValue", inputValue.value);
    emit("input", inputValue.value);
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
        <input
            :id="id"
            v-model="inputValue"
            :placeholder="placeholder"
            :disabled="disabled"
            :maxlength="maxLength"
            :class="[
                'w-full px-4 py-3 rounded-md focus:outline-none',
                disabled
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    : 'bg-white text-neutral',
                error
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                    : 'border-none',
            ]"
            @input="onInput"
        />
        <div class="mt-1 flex justify-between">
            <p v-if="error" class="text-xs text-red-600">
                {{ error }}
            </p>
            <p v-if="helperText && !error" class="text-sm text-gray-500">
                {{ helperText }}
            </p>
            <p v-if="maxLength" class="text-sm text-gray-500 ml-auto">
                {{ inputValue.length }}/{{ maxLength }}
            </p>
        </div>
    </div>
</template>
