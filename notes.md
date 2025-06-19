


libs/
├── products/
│   ├── shell-products/           # Entry point for product domain (routes, lazy-loading)
│   ├── feature-product-list/      # Product list with search + discount timer (smart component)
│   ├── feature-product-details/   # Product details page
│   ├── feature-create-product/    # Create product form
│   ├── data-access-products/      # HTTP calls, NgRx for products
│   ├── domain-products/           # Product validations, models, facades
│   └── api-products/              # Public API for other domains (e.g., shared product DTOs)
│
├── auth/
│   ├── shell-auth/                # Auth entry point (login/register routes)
│   ├── feature-auth/              # Auth page (login/register forms)
│   ├── data-access-auth/          # Auth HTTP calls, NgRx
│   ├── domain-auth/               # Auth validations, models
│   └── api-auth/                  # Auth API (e.g., exposed User DTOs)
│
└── shared/
    ├── ui/                        # Reusable dumb components
    │   ├── product-card/          # Card with discount timer
    │   ├── search-input/          # Search input component
    │   └── shared-components/     # Buttons, modals, etc.
    │
    ├── util/                      # Framework-agnostic helpers
    │   ├── form-validators/       # Shared validation logic
    │   └── timer/                 # Discount timer logic
    │
    └── api-shared/                # Cross-domain contracts (e.g., common DTOs)