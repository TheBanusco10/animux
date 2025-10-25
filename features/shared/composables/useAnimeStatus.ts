import type { Status } from "~/features/shared/types/anime";

export default () => {
  const getAnimeStatusColorByStatus = (status: Status) => {
    switch (status) {
      case "watching":
        return `var(--color-primary)`;
      case "completed":
        return `var(--color-secondary)`;
      case "on_hold":
        return `var(--color-warning)`;
      case "dropped":
        return `var(--color-error)`;
      case "plan_to_watch":
        return `var(--color-info)`;
      default:
        return `var(--color-base-300)`;
    }
  };

  return {
    getAnimeStatusColorByStatus,
  };
};
