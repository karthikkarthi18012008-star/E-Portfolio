# FarmFresh Change Log

This file tracks all project changes across team modules.
Format:
- Date
- File path
- Change type (Created / Modified / Deleted / Renamed)
- What was changed
- Status

---

## 2026-09-09

### `FarmFresh_CHANGE_LOG.md`
- **Date**: 2026-09-09
- **File path**: `FarmFresh_CHANGE_LOG.md`
- **Change type**: Created
- **What was changed**: Initialized project-wide change tracking file per team governance rules.
- **Status**: Completed

### `frontend/src/utils/imageFallback.js`
- **Date**: 2026-09-09
- **File path**: `frontend/src/utils/imageFallback.js`
- **Change type**: Created
- **What was changed**: Created image fallback utility with category-specific fallback images (Vegetables, Fruits, Dairy & Eggs, Honey & Preserves), an inline SVG placeholder fallback guaranteed to load offline, and `handleImageError` helper to gracefully catch broken image requests (e.g. expired 402/404 URLs) without looping.
- **Status**: Completed

### `frontend/src/components/ProductCard.jsx`
- **Date**: 2026-09-09
- **File path**: `frontend/src/components/ProductCard.jsx`
- **Change type**: Modified
- **What was changed**: Connected `handleImageError` and `getFallbackImage` on the product card thumbnail. If a product image fails to load or is empty, it seamlessly renders the FarmFresh category fallback instead of a broken-image browser icon.
- **Status**: Completed

### `frontend/src/pages/ProductDetail.jsx`
- **Date**: 2026-09-09
- **File path**: `frontend/src/pages/ProductDetail.jsx`
- **Change type**: Modified
- **What was changed**: Integrated `handleImageError` and `getFallbackImage` for the main product detail showcase image to guard against broken image links.
- **Status**: Completed

### `backend/src/controllers/productsController.js`
- **Date**: 2026-09-09
- **File path**: `backend/src/controllers/productsController.js`
- **Change type**: Modified
- **What was changed**: Replaced the hardcoded Heirloom Tomato Unsplash image default fallback with a neutral produce harvest image (`DEFAULT_FALLBACK_IMAGE`) so products lacking an image URL no longer masquerade as tomatoes.
- **Status**: Completed

### `frontend/src/context/AppContext.jsx`
- **Date**: 2026-09-09
- **File path**: `frontend/src/context/AppContext.jsx`
- **Change type**: Modified
- **What was changed**: Added `authLoading` state to track initial Supabase session and profile resolution; updated `loadUserProfile` to resolve profile role from database `profiles` table; exported `authLoading` in `AppContext.Provider` to support route guarding without prematurely redirecting or crashing.
- **Status**: Completed

### `frontend/src/components/ProtectedRoute.jsx`
- **Date**: 2026-09-09
- **File path**: `frontend/src/components/ProtectedRoute.jsx`
- **Change type**: Created
- **What was changed**: Created role-aware route protection component (`ProtectedRoute`) with loading spinner during `authLoading`, redirect to `/login` preserving intended destination via `location.state`, and unauthorized access barrier if user role does not match `requiredRole`.
- **Status**: Completed

### `frontend/src/pages/AuthPage.css`
- **Date**: 2026-09-09
- **File path**: `frontend/src/pages/AuthPage.css`
- **Change type**: Modified
- **What was changed**: Added styling for role selector toggle (Customer vs Farmer), active state transitions, and farmer portal banner badge.
- **Status**: Completed

### `frontend/src/pages/AuthPage.jsx`
- **Date**: 2026-09-09
- **File path**: `frontend/src/pages/AuthPage.jsx`
- **Change type**: Modified
- **What was changed**: Added explicit Farmer vs Customer sign-in mode with `?role=farmer` URL support; implemented input validation; added authentication loading states and friendly error messages; added profile role verification against Supabase `profiles` table to prevent role spoofing; implemented role-based redirect (`/farmer` for farmers vs `/` for customers) preserving `location.state.from`.
- **Status**: Completed

### `frontend/src/pages/FarmerProducts.jsx`
- **Date**: 2026-09-09
- **File path**: `frontend/src/pages/FarmerProducts.jsx`
- **Change type**: Modified
- **What was changed**: Fixed null pointer exception on `currentUser.id` by safely using `currentUser?.id`; added `handleImageError` and `getFallbackImage` to table inventory thumbnails; supported currently logged-in farmer account ID for product filtering.
- **Status**: Completed

### `frontend/src/pages/FarmerDashboard.jsx`
- **Date**: 2026-09-09
- **File path**: `frontend/src/pages/FarmerDashboard.jsx`
- **Change type**: Modified
- **What was changed**: Updated inventory and earnings calculations to include the authenticated farmer's ID (`currentUser?.id`), and updated greeting banner to display farmer farm/business name.
- **Status**: Completed

### `frontend/src/App.jsx`
- **Date**: 2026-09-09
- **File path**: `frontend/src/App.jsx`
- **Change type**: Modified
- **What was changed**: Protected farmer routes (`/farmer`, `/farmer/products`, `/farmer/orders`) with `<ProtectedRoute requiredRole="farmer">` and customer orders with `<ProtectedRoute requiredRole="customer">`.
- **Status**: Completed

### `frontend/src/components/Navbar.jsx`
- **Date**: 2026-09-09
- **File path**: `frontend/src/components/Navbar.jsx`
- **Change type**: Modified
- **What was changed**: Added a dedicated "Farmer Portal" entry button in Navbar actions when logged out, directing farmers directly to `/login?role=farmer`.
- **Status**: Completed

### Supabase Database (`products`, `orders`, `order_items`)
- **Date**: 2026-09-09
- **File path**: Database (Supabase Remote Instance `cdqulhmqwuhfyfwzjjoa`)
- **Change type**: Modified
- **What was changed**: Safely removed test foreign key reference in `order_items` for test order `8c358151-319a-4a0a-848d-692693bdf323`, deleted 14 dummy test tomato products (`Tomato` / `Fresh Tomato`), and verified that legitimate product `1594e9d7-72fc-4011-ae32-b7ecd4de7244` (`Tomat`) remains intact.
- **Status**: Completed

### Supabase Database (`products`)
- **Date**: 2026-09-10
- **File path**: Database (Supabase Remote Instance `cdqulhmqwuhfyfwzjjoa`)
- **Change type**: Modified
- **What was changed**: Verified catalog pricing field and foreign-key references (`order_items`, `reviews`). Confirmed 0 foreign key references to products priced at $4 or higher. Safely removed 40 products priced >= $4 from the catalog. Preserved all 22 products priced below $4 (ranging from $0.20/kg to $3.50/kg).
- **Status**: Completed

---

## 2026-09-10 - PHASE 1 UI/UX IMPROVEMENTS

### `frontend/src/pages/ProductDetail.jsx`
- **Date**: 2026-09-10
- **File path**: `frontend/src/pages/ProductDetail.jsx`
- **Change type**: Modified
- **What was changed**: 
  - Fixed critical guest user null crash by using optional chaining (`currentUser?.role`) at lines 142, 169, and 182 where `currentUser.role` was accessed without null checking
  - Added guest purchase CTA section that displays "Sign in to Purchase" message with button linking to auth page when `!currentUser`
  - Added accessibility improvements: aria-labels on qty picker buttons, aria-live on qty display
- **Status**: Completed

### `frontend/src/pages/ProductDetail.css`
- **Date**: 2026-09-10
- **File path**: `frontend/src/pages/ProductDetail.css`
- **Change type**: Modified
- **What was changed**: 
  - Added `.guest-checkout-cta` styling for guest purchase CTA section with gradient background and full-width sign-in button
  - Added `.guest-signin-btn` styling with primary color, hover, and focus states for accessibility
  - Improved `.back-catalog-link` with focus outline for accessibility
  - Added mobile responsive layout for `.detail-grid` (stacks on tablets/mobile)
  - Enhanced qty picker button styling with focus states and better touch targets (44px width)
  - Added focus outlines to `.add-to-cart-action-btn` and `.manage-catalog-btn` for keyboard navigation
  - Improved `.star-selector-btn` with better padding and focus states
  - Enhanced `.submit-review-btn` with better hover effects and focus states
  - Updated color variables to use new CSS variables for badge statuses and overlays
- **Status**: Completed

### `frontend/src/components/ProductCard.jsx`
- **Date**: 2026-09-10
- **File path**: `frontend/src/components/ProductCard.jsx`
- **Change type**: Modified
- **What was changed**: No changes needed - ProductCard already uses safe optional chaining (`currentUser?.role`)
- **Status**: Completed

### `frontend/src/components/ProductCard.css`
- **Date**: 2026-09-10
- **File path**: `frontend/src/components/ProductCard.css`
- **Change type**: Modified
- **What was changed**: 
  - Improved card styling with better spacing and consistent shadows
  - Added focus states to product card for keyboard accessibility (`:focus-within`)
  - Enhanced `.add-to-cart-btn` with better padding, min-height (40px), focus outline, and hover shadow effects
  - Enhanced `.edit-shortcut-btn` with better padding, focus outline, and border improvements
  - Improved `.hover-action-btn` with larger touch targets (40px), focus outline, and better hover shadow
  - Improved `.card-content` spacing with gap property and better padding (20px)
  - Enhanced `.farmer-name-tag` with uppercase text, letter spacing, and removed margin
  - Enhanced `.product-title-card` with better line-height and focus states for links
  - Improved `.price-tag-card` with primary color for price amount (better hierarchy)
  - Updated `.stock-tag` colors to use new CSS variables
- **Status**: Completed

### `frontend/src/styles/variables.css`
- **Date**: 2026-09-10
- **File path**: `frontend/src/styles/variables.css`
- **Change type**: Modified
- **What was changed**: 
  - Added CSS variables for success/warning/danger light backgrounds: `--success-light`, `--warning-light`, `--danger-light`
  - Added CSS variables for dark overlays: `--overlay-dark`, `--overlay-dark-light`
  - These variables eliminate hardcoded rgba values across components and provide consistent color usage
- **Status**: Completed

### Build Validation
- **Date**: 2026-09-10
- **File path**: Frontend build
- **Change type**: Build completed
- **What was changed**: Ran `npm run build` in frontend directory - build succeeded with no compilation errors. Warnings about chunk size are not Phase 1 scope.
- **Status**: Completed

---

## 2026-09-10 - PHASE 2 NAVBAR & MOBILE NAVIGATION IMPROVEMENTS

### `frontend/src/components/Navbar.jsx`
- **Date**: 2026-09-10
- **File path**: `frontend/src/components/Navbar.jsx`
- **Change type**: Modified
- **What was changed**: 
  - Added mobile menu state management with `useState` hook
  - Added `useEffect` to close mobile menu on route changes
  - Added `useEffect` with Escape key handler for keyboard accessibility
  - Added hamburger menu button (Menu/X icons from lucide-react)
  - Implemented mobile menu drawer with role-aware navigation
  - Added mobile user profile section with sign-out button
  - Added aria-labels for accessibility (hamburger button, sign-out button)
  - Preserved all existing functionality: role-based navigation, cart badge, user profile, sign-out
  - Mobile menu includes all navigation options that were in desktop navbar
- **Status**: Completed

### `frontend/src/components/Navbar.css`
- **Date**: 2026-09-10
- **File path**: `frontend/src/components/Navbar.css`
- **Change type**: Modified
- **What was changed**: 
  - **Desktop Navbar Polish:**
    - Improved navbar logo with better gap and hover states
    - Enhanced nav links with better gap (40px), focus outlines, and subtle animations
    - Improved spacing and alignment in navbar-container
    - Enhanced cart button styling with better focus states
    - Improved user profile badge with better color (primary-light background), larger avatar (38px)
    - Enhanced sign-out button with focus states
    - Improved sign-in and farmer portal button styling with shadows and hover effects
  - **Mobile Navigation Implementation:**
    - Added `.mobile-menu-btn` (hamburger button) - hidden on desktop, shown on mobile
    - Added `.mobile-menu-overlay` with fade animation for background dimming
    - Added `.mobile-menu` drawer with smooth slide-in animation from top
    - Added `.mobile-nav-section` with role-based navigation items
    - Added `.mobile-nav-link` styling with hover, focus, and active states
    - Added left border indicator for active mobile nav links
    - Added `.mobile-cart-link` with cart badge support
    - Added `.mobile-menu-divider` for visual separation
    - Added `.mobile-user-section` at bottom of mobile menu with profile info and sign-out
    - Added mobile cart badge styling
    - Implemented Escape key close functionality in JS
    - Added proper z-index management (overlay: 999, menu: 1001)
  - **Responsive Breakpoints:**
    - 1024px: Optimized spacing for tablets
    - 768px: Show hamburger, hide desktop navbar, show mobile menu
    - 480px: Optimized for small phones
  - **Accessibility Improvements:**
    - Focus outlines on all interactive elements (2px solid primary color)
    - aria-expanded and aria-controls attributes on hamburger button
    - Proper button/link semantics
    - Keyboard-navigable mobile menu
    - Escape key closes mobile menu
    - Prevents body scroll when menu is open
- **Status**: Completed

### Frontend Build Validation
- **Date**: 2026-09-10
- **File path**: Frontend build
- **Change type**: Build completed
- **What was changed**: Ran `npm run build` - build completed successfully with no compilation errors. CSS file size increased from 69.55 kB to 75.11 kB (expected due to mobile menu styling). No functionality changes affected existing pages.
- **Status**: Completed

---

## 2026-09-10 - PHASE 3 MARKETPLACE & AI ASSISTANT OPTIMIZATION

### `frontend/src/pages/BrowseProducts.jsx`
- **Date**: 2026-09-10
- **File path**: `frontend/src/pages/BrowseProducts.jsx`
- **Change type**: Modified
- **What was changed**: 
  - Implemented collapsible AI Shopping Assistant panel with trigger button and expanded/collapsed states
  - Added `aiExpanded` state to control AI Assistant visibility
  - Moved AI Assistant to a compact collapsible container instead of always-visible full card
  - Added ChevronDown icon to AI trigger button with rotation animation
  - Replaced inline error banner styling with dedicated `.product-error-banner` and `.error-banner-retry-btn` classes
  - Replaced inline loading state styling with `.loading-state-container` class
  - Added aria-expanded, aria-controls, and aria-label attributes for accessibility
  - All existing product fetching, filtering, sorting, and search functionality preserved
- **Status**: Completed

### `frontend/src/pages/BrowseProducts.css`
- **Date**: 2026-09-10
- **File path**: `frontend/src/pages/BrowseProducts.css`
- **Change type**: Modified
- **What was changed**: 
  - **Collapsible AI Assistant**: Added `.ai-assistant-compact`, `.ai-assistant-trigger`, `.ai-trigger-icon`, `.ai-trigger-text`, `.ai-trigger-subtitle`, `.ai-trigger-chevron` styling with smooth animations and hover effects
  - **Error Banner**: Created dedicated `.product-error-banner` styling with flex layout and `.error-banner-retry-btn` with proper hover/focus states
  - **Search Box**: Enhanced with better focus states (glow shadow) and placeholder styling, improved clear button with padding
  - **Category Filters**: Updated to pill-style buttons (border-radius: 20px), improved hover animation (translateY(-2px)), better active state with shadow
  - **Sort Control**: Added min-width constraint, improved hover/focus states, better icon positioning
  - **Product Grid**: Optimized responsive columns (260px minmax), improved gap spacing, better tablet/mobile layout
  - **Loading State**: Created `.loading-state-container` with centered spinner animation and improved spacing
  - **Empty State**: Enhanced `.no-results-box` with larger emoji, better typography hierarchy, and improved button styling
  - **Responsive Breakpoints**: Added comprehensive breakpoints (1024px, 768px, 480px) with mobile-specific optimizations:
    - Desktop (1024px+): Full layout with optimized spacing
    - Tablet (768px): Hamburger category filters with horizontal scroll, responsive sort dropdown
    - Mobile (480px): Single-column product grid, stacked toolbar, full-width buttons, smaller text sizing
- **Status**: Completed

### `frontend/src/components/AiAssistant.jsx`
- **Date**: 2026-09-10
- **File path**: `frontend/src/components/AiAssistant.jsx`
- **Change type**: Modified
- **What was changed**: 
  - Added `compact` prop to accept compact mode from parent BrowseProducts component
  - Applied `compact` class to `.ai-assistant-container` when compact prop is true
  - All AI functionality preserved: chat queries, product recommendations, M2M payment status, add-to-cart, etc.
- **Status**: Completed

### `frontend/src/components/AiAssistant.css`
- **Date**: 2026-09-10
- **File path**: `frontend/src/components/AiAssistant.css`
- **Change type**: Modified
- **What was changed**: 
  - **Compact Mode**: Added `.ai-assistant-container.compact` styling with reduced padding (20px), no bottom margin, and adjusted hover shadow
  - **Mobile Responsiveness**: Comprehensive mobile-specific styling for screens ≤768px and ≤480px:
    - **Tablet (768px)**: Reduced padding, adjusted header sizing, smaller fonts, improved input/button sizing
    - **Mobile (480px)**: Stacked input wrapper (flex-direction: column), smaller icon sizes, adjusted text sizing, full-width buttons, improved touch targets
    - Consistent spacing adjustments across all child elements for better mobile readability
  - All existing AI assistant functionality styling preserved: results panel, product cards, intent details, M2M status boxes, etc.
- **Status**: Completed

### Frontend Build Validation - Phase 3A
- **Date**: 2026-09-10
- **File path**: Frontend build
- **Change type**: Build completed
- **What was changed**: Ran `npm run build` - build completed successfully with no compilation errors. CSS file size increased from 75.11 kB to 84.06 kB (expected due to collapsible AI Assistant styling and responsive improvements across 3 mobile breakpoints).
- **Status**: Completed

---

## 2026-09-10 - PHASE 3B PRODUCT CARDS & PRODUCT DISCOVERY POLISH

### `frontend/src/components/ProductCard.jsx`
- **Date**: 2026-09-10
- **File path**: `frontend/src/components/ProductCard.jsx`
- **Change type**: Modified
- **What was changed**:
  - Changed root element from `<div>` to `<article>` for correct landmark semantics
  - Added `aria-label` on the card article (includes product name and sold-out signal)
  - Added `aria-hidden="true"` to decorative elements (category badge, hover actions, stock overlay)
  - Added `aria-label` and `tabIndex={-1}` on the hover quick-view link (keyboard users reach the title link instead)
  - Added `aria-label` and `aria-disabled` on the add-to-cart button for screen-reader clarity
  - Moved `.stock-indicator` above the footer separator so it participates in consistent vertical rhythm rather than appearing after the footer
  - Extracted `isLowStock` boolean to simplify conditional rendering
  - Added `AlertCircle` icon inline on the out-of-stock pill for visual reinforcement
  - Simplified stock label text ("Only N left" instead of "Only N left!" with "N {unit}s available" verbose form)
  - Added `role="img"` semantics via `aria-label` on add-to-cart `ShoppingCart` icon (`aria-hidden`)
  - Added explicit guest CTA: when `userRole` is undefined a visible "View" button with `Eye` icon replaces the hidden cart action, giving guests a clear next step
  - Guarded `farmerName` display so the element is only rendered when the value is truthy (avoids empty DOM node)
  - All cart/payment/auth/x402 logic untouched
- **Status**: Completed

### `frontend/src/components/ProductCard.css`
- **Date**: 2026-09-10
- **File path**: `frontend/src/components/ProductCard.css`
- **Change type**: Modified
- **What was changed**:
  - **Card shell**: Reduced hover lift from `translateY(-6px)` to `translateY(-3px)` for a subtler, more professional feel; split transition shorthand into explicit properties for better browser paint performance; added `height: 100%` so all cards in a grid row reach equal height
  - **Reduced-motion**: Added `@media (prefers-reduced-motion: reduce)` block disabling all transforms and animations on the card, image, buttons, and hover actions
  - **Image container**: Replaced fixed `height: 200px` with `aspect-ratio: 4/3` so images maintain a consistent ratio regardless of card width; added `object-position: center` and `display: block` to eliminate baseline gap; capped hover scale at 1.04 (down from 1.06)
  - **Category badge**: Tightened to 10px font, improved backdrop-filter, added `pointer-events: none` and `user-select: none`
  - **Hover quick-view**: Replaced absolute-bottom slide with opacity + subtle translateY(4px→0) so it never obscures image content; uses `pointer-events: none/auto` toggle
  - **Card content**: Removed `gap: 12px` (replaced with explicit per-child `margin-bottom` for precise control); reduced padding slightly (16px 18px)
  - **Product title**: Added `-webkit-line-clamp: 2` with `min-height` reservation so cards with short names stay the same height as those with two-line names; font-size 15px (from 16px) for slightly tighter hierarchy
  - **Stock pill**: Restyled as a rounded pill (border-radius 20px), uppercase 10px text, `display: inline-flex` with icon gap; removed the `pulse` animation on low-stock (replaced with static amber pill — less distracting)
  - **Price**: Reduced to 20px (from 22px) to avoid dominating above the product name; added `letter-spacing: -0.3px` for tighter large-number rendering
  - **CTA buttons**: Enforced `min-height: 44px; min-width: 44px` touch targets on all three button variants; switched to `:focus-visible` (instead of `:focus`) to avoid persistent ring on mouse click; added `:active` state on add-to-cart; `white-space: nowrap` prevents label wrapping at narrow widths
  - **Guest view button** (`.view-details-btn`): New class — outlined primary-color button shown when the user is not logged in
  - **Responsive**: Updated breakpoints for 768px and 480px; at 480px switched image to `aspect-ratio: 16/9` and removed the 2-line title clamp (single-column layout has no height-consistency risk); all breakpoints reuse existing token variables without introducing new ones
  - No new CSS custom properties introduced — all values use existing tokens from `variables.css`
- **Status**: Completed

### Frontend Build Validation — Phase 3B
- **Date**: 2026-09-10
- **File path**: Frontend build
- **Change type**: Build completed
- **What was changed**: Ran `npx vite build` — build succeeded with no compilation errors (✓ 2,504 modules transformed, built in 1.61s). CSS bundle grew from 84.06 kB to 86.41 kB (expected — new guest button and reduced-motion block). Chunk-size advisory is pre-existing and not a Phase 3B issue.
- **Status**: Completed
