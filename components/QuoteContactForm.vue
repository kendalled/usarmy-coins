<template>
  <div class="relative transform overflow-hidden rounded-2xl bg-slate-800 shadow-2xl transition-all max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="p-6 border-b border-slate-700">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-bold text-white">Get Your Free Proof</h2>
            <p class="text-slate-400 mt-1">We'll create a custom design proof at no charge</p>
          </div>
          <button 
            @click="$emit('close')"
            class="text-slate-400 hover:text-white transition-colors"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Form -->
      <form @submit.prevent="submitQuote" class="p-6 space-y-6">
        <!-- Quote Summary -->
        <div class="bg-slate-700/50 rounded-xl p-4 mb-6">
          <h3 class="text-lg font-semibold text-white mb-3">Your Quote Summary</h3>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span class="text-slate-400">Size:</span>
              <span class="text-white ml-2">{{ quoteData.size }}"</span>
            </div>
            <div>
              <span class="text-slate-400">Quantity:</span>
              <span class="text-white ml-2">{{ formatQuantity(quoteData.quantity) }}</span>
            </div>
            <div>
              <span class="text-slate-400">Plating:</span>
              <span class="text-white ml-2">{{ quoteData.plating }}</span>
            </div>
            <div>
              <span class="text-slate-400">Packaging:</span>
              <span class="text-white ml-2">{{ quoteData.packaging }}</span>
            </div>
          </div>
          <div class="mt-4 pt-4 border-t border-slate-600">
            <div class="flex justify-between items-center">
              <span class="text-slate-400">Estimated Total:</span>
              <span class="text-2xl font-bold text-orange-400">${{ quoteData.estimatedTotal }}</span>
            </div>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white mb-4">Contact Information</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-2">
                First Name *
              </label>
              <input
                v-model="form.firstName"
                type="text"
                required
                class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                placeholder="Enter your first name"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-2">
                Last Name *
              </label>
              <input
                v-model="form.lastName"
                type="text"
                required
                class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                placeholder="Enter your last name"
              >
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-300 mb-2">
              Email Address *
            </label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              placeholder="Enter your email address"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-300 mb-2">
              Phone Number *
            </label>
            <input
              v-model="form.phone"
              type="tel"
              required
              class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              placeholder="Enter your phone number"
            >
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-2">
                Organization/Unit *
              </label>
              <input
                v-model="form.organization"
                type="text"
                required
                class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                placeholder="Enter your unit or organization"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-2">
                Rank/Title
              </label>
              <input
                v-model="form.rank"
                type="text"
                class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                placeholder="Enter your rank or title"
              >
            </div>
          </div>
        </div>

        <!-- Project Details -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white mb-4">Project Details</h3>
          
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-2">
              Project Description
            </label>
            <textarea
              v-model="form.projectDescription"
              rows="4"
              class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
              placeholder="Tell us about your coin project - purpose, design ideas, special requirements, etc."
            ></textarea>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-2">
                Needed By Date
              </label>
              <input
                v-model="form.neededBy"
                type="date"
                class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-2">
                Budget Range
              </label>
              <select
                v-model="form.budgetRange"
                class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              >
                <option value="">Select budget range</option>
                <option value="under-500">Under $500</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000-2500">$1,000 - $2,500</option>
                <option value="2500-5000">$2,500 - $5,000</option>
                <option value="over-5000">Over $5,000</option>
              </select>
            </div>
          </div>
        </div>

        <!-- File Upload -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white mb-4">Artwork & References</h3>
          
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-2">
              Upload Existing Artwork or References (Optional)
            </label>
            <div 
              class="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center hover:border-slate-500 transition-colors cursor-pointer"
              @dragover.prevent
              @drop.prevent="handleFileDrop"
              @click="$refs.fileInput.click()"
            >
              <svg class="mx-auto h-12 w-12 text-slate-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p class="text-slate-300 mb-2">
                <span class="font-medium">Click to upload</span> or drag and drop
              </p>
              <p class="text-sm text-slate-400">PNG, JPG, PDF up to 10MB</p>
              <input
                ref="fileInput"
                type="file"
                multiple
                accept=".png,.jpg,.jpeg,.pdf"
                @change="handleFileSelect"
                class="hidden"
              >
            </div>
            
            <!-- Uploaded Files -->
            <div v-if="uploadedFiles.length > 0" class="mt-4 space-y-2">
              <div
                v-for="(file, index) in uploadedFiles"
                :key="index"
                class="flex items-center justify-between bg-slate-700/50 rounded-lg p-3"
              >
                <div class="flex items-center space-x-3">
                  <svg class="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-slate-300 text-sm">{{ file.name }}</span>
                  <span class="text-slate-400 text-xs">({{ formatFileSize(file.size) }})</span>
                </div>
                <button
                  @click="removeFile(index)"
                  class="text-slate-400 hover:text-red-400 transition-colors"
                >
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-6 border-t border-slate-700">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <svg v-if="isSubmitting" class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span>{{ isSubmitting ? 'Submitting Quote...' : 'Submit Quote Request' }}</span>
          </button>
          
          <p class="text-sm text-slate-400 text-center mt-4">
            By submitting, you agree to receive communications about your quote request.
            We'll respond within 24 hours with your custom design proof.
          </p>
        </div>
      </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  quoteData: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close', 'submitted'])

const isSubmitting = ref(false)
const uploadedFiles = ref([])

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  organization: '',
  rank: '',
  projectDescription: '',
  neededBy: '',
  budgetRange: ''
})

const formatQuantity = (quantity) => {
  if (quantity === "Other") return "Other"
  return quantity.toLocaleString()
}

const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const handleFileSelect = (event) => {
  const files = Array.from(event.target.files)
  addFiles(files)
}

const handleFileDrop = (event) => {
  const files = Array.from(event.dataTransfer.files)
  addFiles(files)
}

const addFiles = (files) => {
  const validFiles = files.filter(file => {
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf']
    const maxSize = 10 * 1024 * 1024 // 10MB
    
    if (!validTypes.includes(file.type)) {
      alert(`${file.name} is not a valid file type. Please upload PNG, JPG, or PDF files.`)
      return false
    }
    
    if (file.size > maxSize) {
      alert(`${file.name} is too large. Please upload files under 10MB.`)
      return false
    }
    
    return true
  })
  
  uploadedFiles.value.push(...validFiles)
}

const removeFile = (index) => {
  uploadedFiles.value.splice(index, 1)
}

const submitQuote = async () => {
  try {
    isSubmitting.value = true
    
    // Create form data for submission
    const formData = new FormData()
    
    // Add form fields
    Object.keys(form).forEach(key => {
      if (form[key]) {
        formData.append(key, form[key])
      }
    })
    
    // Add quote data
    formData.append('quoteData', JSON.stringify(props.quoteData))
    
    // Add files
    uploadedFiles.value.forEach((file, index) => {
      formData.append(`file_${index}`, file)
    })
    
    // For now, simulate API call with timeout
    // In production, replace with actual API endpoint
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Here you would make the actual API call:
    // const response = await fetch('/api/submit-quote', {
    //   method: 'POST',
    //   body: formData
    // })
    
    console.log('Quote submitted:', {
      form: form,
      quoteData: props.quoteData,
      files: uploadedFiles.value.map(f => ({ name: f.name, size: f.size }))
    })
    
    emit('submitted', {
      form: { ...form },
      quoteData: props.quoteData,
      files: uploadedFiles.value
    })
    
  } catch (error) {
    console.error('Error submitting quote:', error)
    alert('There was an error submitting your quote. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>