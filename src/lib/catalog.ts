/**
 * Couche d'accès aux données.
 * Aujourd'hui : données locales (dossier /data). Plus tard : remplacez le corps de ces fonctions
 * par des appels à votre API (fetch) — les pages et composants n'auront pas à changer.
 */
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import { tradeOffers } from "@/data/tradeOffers";
import type { Category, Product, Testimonial, TradeOffer } from "@/types";

export async function getCategories(): Promise<Category[]> {
  return categories;
}

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}

export async function getTradeOffers(): Promise<TradeOffer[]> {
  return tradeOffers;
}
