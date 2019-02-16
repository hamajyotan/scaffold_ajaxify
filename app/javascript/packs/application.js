/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Rails from 'rails-ujs'
Rails.start()

import Turbolinks from 'turbolinks'
Turbolinks.start()

import 'stylesheets/application'

document.addEventListener('turbolinks:load', (event) => {
  const forms = document.querySelectorAll('form[data-remote="true"]')
  forms.forEach((form) => {
    form.addEventListener('ajax:error', (event) => {
      const detail = event.detail
      const xhr = detail[2]
      const contentType = xhr.getResponseHeader('content-type')

      if (contentType === 'text/html; charset=utf-8') {
        const target = event.currentTarget
        const tmp = document.createElement('div')
        tmp.innerHTML = xhr.responseText
        const element = tmp.firstElementChild
        target.innerHTML = element.innerHTML
      }
    })
  })
})
