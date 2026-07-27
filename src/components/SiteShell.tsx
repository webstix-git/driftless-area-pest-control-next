"use client";

import { useEffect, type ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ServiceModal from "./ServiceModal";
import BackToTop from "./BackToTop";

type SiteShellProps = {
  children: ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  useEffect(() => {
    const header = document.getElementById("siteHeader");
    const onScroll = () => {
      if (!header) return;
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();

    const mobileToggle = document.getElementById("mobileToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const drawerOverlay = document.getElementById("drawerOverlay");

    function openMobileDrawer() {
      if (!mobileDrawer || !drawerOverlay || !mobileToggle) return;
      mobileDrawer.classList.add("open");
      drawerOverlay.classList.add("active");
      mobileToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    function closeMobileDrawer() {
      if (!mobileDrawer || !drawerOverlay || !mobileToggle) return;
      mobileDrawer.classList.remove("open");
      drawerOverlay.classList.remove("active");
      mobileToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    function toggleMobileDrawer() {
      if (!mobileDrawer) return;
      if (mobileDrawer.classList.contains("open")) {
        closeMobileDrawer();
      } else {
        openMobileDrawer();
      }
    }

    const onDrawerClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) return;
      const closeEl = target.closest(".close-drawer, #mobileDrawerClose");
      if (closeEl) {
        closeMobileDrawer();
      }
    };

    mobileToggle?.addEventListener("click", toggleMobileDrawer);
    drawerOverlay?.addEventListener("click", closeMobileDrawer);
    document.addEventListener("click", onDrawerClick);

    const serviceModal = document.getElementById("serviceModal");
    const openModalBtns = document.querySelectorAll(".open-modal-btn");
    const closeModalBtn = document.getElementById("closeModalBtn");

    const openModal = () => {
      if (!serviceModal) return;
      serviceModal.classList.add("active");
      serviceModal.setAttribute("aria-hidden", "false");
    };

    const closeModal = () => {
      if (!serviceModal) return;
      serviceModal.classList.remove("active");
      serviceModal.setAttribute("aria-hidden", "true");
    };

    openModalBtns.forEach((btn) => btn.addEventListener("click", openModal));
    closeModalBtn?.addEventListener("click", closeModal);
    const onModalBackdropClick = (e: MouseEvent) => {
      if (e.target === serviceModal) closeModal();
    };
    serviceModal?.addEventListener("click", onModalBackdropClick);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (serviceModal?.classList.contains("active")) {
          closeModal();
        }
        if (mobileDrawer?.classList.contains("open")) {
          closeMobileDrawer();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);

    const requestForm = document.getElementById("requestForm") as HTMLFormElement | null;
    const onSubmit = (e: Event) => {
      e.preventDefault();
      alert(
        "Thank you! Your service request has been received. Our team will contact you shortly."
      );
      closeModal();
    };
    requestForm?.addEventListener("submit", onSubmit);

    const revealElements = document.querySelectorAll(".reveal-up");
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.12,
      rootMargin: "0px 0px -30px 0px",
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      mobileToggle?.removeEventListener("click", toggleMobileDrawer);
      drawerOverlay?.removeEventListener("click", closeMobileDrawer);
      document.removeEventListener("click", onDrawerClick);
      document.body.style.overflow = "";
      openModalBtns.forEach((btn) => btn.removeEventListener("click", openModal));
      closeModalBtn?.removeEventListener("click", closeModal);
      serviceModal?.removeEventListener("click", onModalBackdropClick);
      document.removeEventListener("keydown", onKeyDown);
      requestForm?.removeEventListener("submit", onSubmit);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <SiteHeader />
      <main id="mainContent">{children}</main>
      <SiteFooter />
      <ServiceModal />
      <BackToTop />
    </>
  );
}
