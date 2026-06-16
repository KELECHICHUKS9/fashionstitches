tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "keyframes": {
                        "zoom-subtle": {
                            "0%, 100%": { "transform": "scale(1.05)" },
                            "50%": { "transform": "scale(1.08)" }
                        }
                    },
                    "animation": {
                        "zoom-subtle": "zoom-subtle 20s infinite alternate"
                    },
                    "colors": {
                        "inverse-on-surface": "#f3f0f0",
                        "outline": "#897172",
                        "surface-tint": "#a33a48",
                        "secondary-fixed-dim": "#e5c281",
                        "surface": "#fcf9f8",
                        "inverse-primary": "#ffb2b7",
                        "on-primary-fixed": "#40000e",
                        "on-tertiary-fixed-variant": "#484743",
                        "on-secondary-fixed-variant": "#5b430e",
                        "secondary": "#755a24",
                        "on-surface": "#1b1c1c",
                        "on-secondary-fixed": "#261900",
                        "surface-bright": "#fcf9f8",
                        "outline-variant": "#dcc0c1",
                        "tertiary-container": "#373632",
                        "secondary-fixed": "#ffdea4",
                        "on-error-container": "#93000a",
                        "background": "#fcf9f8",
                        "error": "#ba1a1a",
                        "surface-container-highest": "#e4e2e1",
                        "inverse-surface": "#303030",
                        "primary-container": "#6d1023",
                        "tertiary": "#22211d",
                        "tertiary-fixed-dim": "#c9c6c0",
                        "surface-variant": "#e4e2e1",
                        "surface-container-low": "#f6f3f2",
                        "on-background": "#1b1c1c",
                        "on-secondary-container": "#795f28",
                        "on-surface-variant": "#564243",
                        "on-tertiary": "#ffffff",
                        "on-primary-container": "#f57986",
                        "tertiary-fixed": "#e6e2dc",
                        "primary": "#4b0012",
                        "surface-dim": "#dcd9d9",
                        "on-tertiary-container": "#a19f9a",
                        "error-container": "#ffdad6",
                        "on-secondary": "#ffffff",
                        "on-primary": "#ffffff",
                        "surface-container-lowest": "#ffffff",
                        "on-error": "#ffffff",
                        "primary-fixed-dim": "#ffb2b7",
                        "on-tertiary-fixed": "#1c1c18",
                        "secondary-container": "#ffdb99",
                        "on-primary-fixed-variant": "#832232",
                        "primary-fixed": "#ffdadb",
                        "surface-container": "#f0eded",
                        "surface-container-high": "#eae7e7"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "margin-mobile": "20px",
                        "unit": "8px",
                        "gutter": "24px",
                        "container-max": "1280px",
                        "margin-desktop": "64px"
                    },
                    "fontFamily": {
                        "label-lg": ["Montserrat"],
                        "body-md": ["Montserrat"],
                        "headline-lg-mobile": ["Playfair Display"],
                        "headline-lg": ["Playfair Display"],
                        "headline-md": ["Playfair Display"],
                        "label-sm": ["Montserrat"],
                        "display-md": ["Playfair Display"],
                        "display-lg": ["Playfair Display"],
                        "body-lg": ["Montserrat"]
                    },
                    "fontSize": {
                        "label-lg": ["14px", {"lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "600"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "headline-lg-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "600"}],
                        "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                        "headline-md": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
                        "label-sm": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.05em", "fontWeight": "500"}],
                        "display-md": ["48px", {"lineHeight": "1.2", "fontWeight": "700"}],
                        "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}]
                    }
                },
            },
        }
