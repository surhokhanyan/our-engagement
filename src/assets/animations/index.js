export const comeing_anime = {
    hidden: (custom) => ({
        x: custom,
        opacity: 0,
    }),
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, delay: 0.5 },
    },
};

export const coming_delay = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, delay: custom },
    }),
};

export const coming_delay_right = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, delay: custom },
    }),
};

export const scale_anime = {
    hidden: {
        transform: "scale(0)",
        opacity: 0,
    },
    visible: {
        transform: "scale(1)",
        opacity: 1,
        transition: { duration: 0.4, delay: 0.3 },
    },
};

export const coming_from_top_anime = {
    hidden: (custom) => ({
        y: custom,
        opacity: 0,
    }),
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, delay: 0.3 },
    },
};

export const opacity_anime = {
    hidden: {
        opacity: 0,
    },
    visible: (custom) => ({
        opacity: 1,
        transition: { duration: 0.4, delay: custom },
    }),
};

export const small_scale_animie = {
    hidden: {
        transform: "scale(0.8)",
    },
    visible: (custom) => ({
        transform: "scale(1)",
        transition: { duration: 0.4, delay: custom },
    }),
};

export const big_scale_animie = {
    hidden: {
        transform: "scale(0.8)",
    },
    visible: (custom) => ({
        transform: "scale(1.3)",
        transition: { duration: 0.4, delay: custom },
    }),
};

export const opacity_scale_anime = {
    hidden: {
        opacity: 0,
        transform: "scale(0)",
    },
    visible: (custom) => ({
        opacity: 1,
        transform: "scale(1)",
        transition: { duration: 0.4, delay: custom },
    }),
};

export const items_op_scale_animation = {
    hidden: {
        opacity: 0,
        transform: `scale(0)`,
    },
    visible: (custom) => ({
        opacity: 1,
        transition: { duration: 0.4, delay: custom * 0.05 },
        transform: `scale(1)`,
    }),
};
