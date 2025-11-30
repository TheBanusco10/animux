<script setup lang="ts">
import type { ColorValues } from "../../domain/types/theme/color";
import type { StyleValues } from "../../domain/types/theme/style";
import type { ModifierValues } from "../../domain/types/theme/modifier";
import type { SizeValues } from "../../domain/types/theme/size";
import { ColorEnum } from "../../domain/enums/theme/color";
import { StyleEnum } from "../../domain/enums/theme/style";
import { ModifierEnum } from "../../domain/enums/theme/modifier";
import { SizeEnum } from "../../domain/enums/theme/size";

interface Props {
  type?: ColorValues;
  style?: StyleValues;
  modifier?: ModifierValues;
  size?: SizeValues;
  disabled?: boolean;
}

const { type, style, modifier, size } = withDefaults(defineProps<Props>(), {
  type: "none",
  style: "none",
  modifier: "none",
  size: "md",
  disabled: false,
});

const getButtonType = () => {
  return {
    [ColorEnum.Neutral]: "btn-neutral",
    [ColorEnum.Primary]: "btn-primary",
    [ColorEnum.Secondary]: "btn-secondary",
    [ColorEnum.Accent]: "btn-accent",
    [ColorEnum.Info]: "btn-info",
    [ColorEnum.Success]: "btn-success",
    [ColorEnum.Warning]: "btn-warning",
    [ColorEnum.Error]: "btn-error",
    [ColorEnum.None]: "",
  }[type];
};

const getButtonStyle = () => {
  return {
    [StyleEnum.Outline]: "btn-outline",
    [StyleEnum.Dash]: "btn-dashed",
    [StyleEnum.Soft]: "btn-soft",
    [StyleEnum.Ghost]: "btn-ghost",
    [StyleEnum.Link]: "btn-link",
    [StyleEnum.None]: "",
  }[style];
};

const getButtonModifier = () => {
  return {
    [ModifierEnum.Wide]: "btn-wide",
    [ModifierEnum.Block]: "btn-block",
    [ModifierEnum.Square]: "btn-square",
    [ModifierEnum.Circle]: "btn-circle",
    [ModifierEnum.None]: "",
  }[modifier];
};

const getButtonSize = () => {
  return {
    [SizeEnum.Xs]: "btn-xs",
    [SizeEnum.Sm]: "btn-sm",
    [SizeEnum.Md]: "btn-md",
    [SizeEnum.Lg]: "btn-lg",
    [SizeEnum.Xl]: "btn-xl",
  }[size];
};
</script>
<template>
  <button
    class="btn"
    :class="[
      getButtonType(),
      getButtonStyle(),
      getButtonModifier(),
      getButtonSize(),
    ]"
    :disabled="disabled"
  >
    <slot name="before" />
    <slot />
    <slot name="after" />
  </button>
</template>
