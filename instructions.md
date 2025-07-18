### **Plan to Refactor Interior Page Layouts**

**Objective:** To rearrange the components within all interior pages to create a more logical and visually pleasing order for users, while maintaining the current file and content structure.

**Core Strategy:**
Modify the template section of each interior page to reorder existing components and introduce new ones for a better user flow.

---

### **Execution Steps:**

**1. Target Files**

Apply the following layout changes to these interior page files:
*   `pages/air-force-challenge-coins.vue`
*   `pages/army-challenge-coins.vue`
*   `pages/coast-guard-challenge-coins.vue`
*   `pages/marine-corps-challenge-coins.vue`
*   `pages/navy-challenge-coins.vue`
*   `pages/space-force-challenge-coins.vue`
*   `pages/[...slug].vue`

**2. Import New Components**

*   In the `<script setup>` section of each target file, ensure the following components are imported:
    ```javascript
    import DeliveredCoinsGallery from '~/components/DeliveredCoinsGallery.vue'
    import Process from '~/components/Process.vue'
    import QuoteContactForm from '~/components/QuoteContactForm.vue'
    ```

**3. Rearrange the Page Template**

*   In each target file, modify the `<template>` section to match the new, improved layout structure below.
*   **Important:** You will need to adapt the props for components like `TestQuote` and `MilitaryFAQ` to use the correct data for each specific page (e.g., `page-title`, `primary-image`, `branchName`, etc.). The core *order* of the components should be identical across all files.

*   **Action - Implement the New Layout Structure:**
    Rearrange the components to match this order.

    ```html
    <template>
      <div class="min-h-screen bg-gray-900">
        <!-- 1. Navbar (No Change) -->
        <ZeroNavbar />

        <!-- 2. Hero Section (No Change, ensure props are correct for the page) -->
        <TestQuote 
          :page-title="pageTitle" 
          :breadcrumb-text="breadcrumbText"
          :primary-image="primaryImage"
        />
        
        <!-- 3. Main Content Section -->
        <div class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-20">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[84rem]">
            <div class="max-w-6xl mx-auto">
              <!-- Intro & "Why Us" (Existing content for each page) -->
              <div class="text-center mb-16">...</div>
              <div class="grid ... mb-12">...</div>

              <!-- 4. Image Gallery (NEW) -->
              <DeliveredCoinsGallery class="mb-12 md:mb-16" />

              <!-- 5. The Process (NEW) -->
              <Process class="mb-12 md:mb-16" />

              <!-- 6. Detailed Information (Existing content for each page) -->
              <div class="... mb-12">...</div>
              <div class="...">...</div>
            </div>
          </div>
        </div>
        
        <!-- 7. Quality Section (No Change) -->
        <QualityContentSection />

        <!-- 8. FAQs (No Change, ensure props are correct for the page) -->
        <MilitaryFAQ 
          :branchName="branchName"
          :customFAQs="customFAQs"
        />

        <!-- 9. Call to Action (NEW) -->
        <QuoteContactForm class="py-16 md:py-20 bg-slate-800" />

        <!-- 10. SEO Schema (No Change, ensure props are correct for the page) -->
        <FAQSchema 
          :faqs="allFAQs" 
          :pageName="pageName"
        />

        <!-- 11. Footer (No Change) -->
        <SiteFooter />
      </div>
    </template>
    ```