$(document).ready(function() {
  // Mobile Menu Toggle
  $('.mobile-menu-btn').click(() => $('.nav-menu').toggleClass('active'));

  // Close mobile menu when clicking outside
  $(document).click(e => {
      if (!$(e.target).closest('.mobile-menu-btn, .nav-menu').length) $('.nav-menu').removeClass('active');
  });

  // Smooth scroll for navigation links
  $('a[href^="#"]').click(function(e) {
      e.preventDefault();
      const target = $(this).attr('href');
      if (target === '#demo') return $('#demo').fadeIn(300).css('display', 'flex');
      $('.nav-menu').removeClass('active');
      $('html, body').animate({ scrollTop: $(target).offset().top - 80 }, 800);
  });

  // Close modal
  $('.modal, .close-modal').click(e => {
      if ($(e.target).is('.modal, .close-modal')) $('.modal').fadeOut(300);
  });

  // Testimonial slider
  let index = 0, testimonials = $('.testimonial'), dots = $('.testimonial-dots');

  testimonials.each((i) => dots.append(`<div class="dot ${i === 0 ? 'active' : ''}"></div>`));

  function showTestimonial(i) {
      $('.testimonial-slider').css('transform', `translateX(-${i * 100}%)`);
      $('.dot').removeClass('active').eq(i).addClass('active');
  }

  dots.on('click', '.dot', function() { showTestimonial(index = $(this).index()); });

  setInterval(() => showTestimonial(index = (index + 1) % testimonials.length), 5000);
});
