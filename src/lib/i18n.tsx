"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Locale = "fr" | "ar";

/* ------------------------------------------------------------
   Dictionary — French (primary) + Arabic
   ------------------------------------------------------------ */
export const dict = {
  fr: {
    dir: "ltr",
    nav: {
      story: "Notre maison",
      products: "Produits",
      quality: "Qualité & logistique",
      pro: "Espace professionnel",
      contact: "Contact",
      login: "Connexion pro",
      cta: "Devenir partenaire",
    },
    hero: {
      eyebrow: "Distribution alimentaire · Maroc",
      title: "La fraîcheur,\nlivrée avec exigence.",
      subtitle:
        "Volaille et œufs sélectionnés chaque matin, acheminés sous chaîne du froid maîtrisée jusqu’aux familles et aux professionnels de la table.",
      primary: "Découvrir nos produits",
      secondary: "Espace professionnel",
      scroll: "Faire défiler",
      meta: ["Maroc", "Volaille & œufs frais", "Familles & professionnels"],
    },
    story: {
      eyebrow: "Notre maison",
      title: "Une exigence transmise,\ndu producteur à votre table.",
      lead: "HML Distribution accompagne depuis ses origines les familles et les professionnels marocains avec une seule promesse : une fraîcheur irréprochable, livrée chaque jour avec la même rigueur.",
      body: "Nous sélectionnons nos fermes partenaires une à une, contrôlons chaque lot et maîtrisons chaque maillon de la logistique. Rien n’est laissé au hasard, depuis le premier rayon de soleil sur la campagne jusqu’à l’instant où le chef ouvre sa caisse.",
      stats: [
        { value: "Chaque matin", label: "Collecte et préparation des commandes" },
        { value: "0 – 4 °C", label: "Chaîne du froid maîtrisée de bout en bout" },
        { value: "Familles & pros", label: "Restaurants, hôtels et collectivités" },
      ],
    },
    products: {
      eyebrow: "Nos produits",
      title: "Un catalogue restreint,\nune qualité sans compromis.",
      intro:
        "Nous ne distribuons que ce que nous maîtrisons parfaitement. Deux familles de produits, travaillées avec la précision d’une maison exigeante.",
      items: [
        {
          name: "Volaille fraîche",
          tag: "Poulet · Dinde",
          desc: "Élevée par nos fermes partenaires, préparée et conditionnée le jour même pour préserver toute sa tendreté.",
          meta: [
            { k: "Fraîcheur", v: "Préparée le jour de livraison" },
            { k: "Conditionnement", v: "Caisses isothermes professionnelles" },
            { k: "Disponibilité", v: "Toute l’année" },
          ],
        },
        {
          name: "Œufs frais",
          tag: "Calibrés · Datés",
          desc: "Ramassés et calibrés quotidiennement, tracés du poulailler au plateau pour une fraîcheur garantie.",
          meta: [
            { k: "Fraîcheur", v: "Ramassage quotidien" },
            { k: "Conditionnement", v: "Plateaux et alvéoles protégés" },
            { k: "Disponibilité", v: "Approvisionnement constant" },
          ],
        },
      ],
    },
    quality: {
      eyebrow: "Qualité & logistique",
      title: "La précision,\nau service de la fraîcheur.",
      body: "Notre force est invisible : une logistique pensée pour que le produit n’attende jamais. Chaque véhicule est réfrigéré, chaque livraison tracée, chaque température contrôlée.",
      pillars: [
        {
          title: "Sécurité alimentaire",
          desc: "Contrôles sanitaires à chaque étape et respect strict des normes d’hygiène.",
        },
        {
          title: "Chaîne du froid",
          desc: "Une température maîtrisée du stockage jusqu’à la remise en main propre.",
        },
        {
          title: "Traçabilité",
          desc: "Chaque lot identifié, de la ferme partenaire jusqu’à votre réception.",
        },
        {
          title: "Livraison ponctuelle",
          desc: "Des tournées planifiées pour une régularité sur laquelle vous pouvez compter.",
        },
      ],
    },
    pro: {
      eyebrow: "Espace professionnel",
      title: "Un partenariat,\npensé comme un cercle privé.",
      body: "Restaurants, hôtels, traiteurs et collectivités accèdent à un espace dédié : commandes simplifiées, suivi de livraison et conditions négociées. Une relation de confiance, sur le long terme.",
      points: [
        "Commandes récurrentes et planifiées",
        "Suivi de livraison en temps réel",
        "Conditions tarifaires dédiées",
        "Interlocuteur unique et réactif",
      ],
      cta: "Demander un accès",
      login: "Accéder à mon espace",
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlons de vos besoins.",
      body: "Notre équipe vous répond et construit avec vous une solution d’approvisionnement adaptée.",
      cta: "Nous écrire",
      phone: "Appeler",
    },
    footer: {
      tagline: "Distribution de volaille et d’œufs frais — Maroc.",
      explore: "Explorer",
      company: "Maison",
      contact: "Contact",
      rights: "Tous droits réservés.",
      address: "Maroc",
    },
    aria: {
      switchLang: "Changer de langue",
      menu: "Ouvrir le menu",
      close: "Fermer",
      whatsapp: "Nous contacter sur WhatsApp",
    },
    placeholder: "Photographie — à fournir",
  },

  ar: {
    dir: "rtl",
    nav: {
      story: "بيتنا",
      products: "المنتجات",
      quality: "الجودة واللوجستيك",
      pro: "الفضاء المهني",
      contact: "اتصل بنا",
      login: "دخول المهنيين",
      cta: "كن شريكاً",
    },
    hero: {
      eyebrow: "توزيع المواد الغذائية · المغرب",
      title: "الطزاجة،\nمسلَّمة بأعلى معايير الدقة.",
      subtitle:
        "دواجن وبيض يُنتقى كل صباح، ويُنقل عبر سلسلة تبريد محكمة إلى العائلات وأهل المهنة على حدٍّ سواء.",
      primary: "اكتشف منتجاتنا",
      secondary: "الفضاء المهني",
      scroll: "مرّر للأسفل",
      meta: ["المغرب", "دواجن وبيض طازج", "عائلات ومهنيون"],
    },
    story: {
      eyebrow: "بيتنا",
      title: "إتقانٌ متوارث،\nمن المُنتِج إلى مائدتك.",
      lead: "ترافق HML Distribution منذ نشأتها العائلات والمهنيين في المغرب بوعدٍ واحد: طزاجة لا تشوبها شائبة، تُسلَّم كل يوم بالدقة ذاتها.",
      body: "ننتقي مزارعنا الشريكة واحدةً واحدة، ونراقب كل دفعة، ونتحكم في كل حلقة من سلسلة اللوجستيك. لا شيء يُترك للصدفة، من أول شعاع شمس على الريف إلى لحظة فتح الطاهي لصندوقه.",
      stats: [
        { value: "كل صباح", label: "جمع وتحضير الطلبات" },
        { value: "0 – 4 °م", label: "سلسلة تبريد محكمة من البداية للنهاية" },
        { value: "عائلات ومهنيون", label: "مطاعم وفنادق ومؤسسات" },
      ],
    },
    products: {
      eyebrow: "منتجاتنا",
      title: "تشكيلة محدودة،\nوجودة بلا مساومة.",
      intro:
        "لا نوزّع إلا ما نتقنه تمام الإتقان. عائلتان من المنتجات، نعتني بهما بدقة بيتٍ عريق.",
      items: [
        {
          name: "دواجن طازجة",
          tag: "دجاج · ديك رومي",
          desc: "تُربّى لدى مزارعنا الشريكة، وتُحضَّر وتُعبَّأ في اليوم نفسه للحفاظ على طراوتها.",
          meta: [
            { k: "الطزاجة", v: "تُحضَّر يوم التسليم" },
            { k: "التعبئة", v: "صناديق عازلة احترافية" },
            { k: "التوفّر", v: "طوال السنة" },
          ],
        },
        {
          name: "بيض طازج",
          tag: "مُعاير · مؤرَّخ",
          desc: "يُجمع ويُعاير يومياً، ويُتتبّع من المزرعة إلى الطبق لضمان طزاجته.",
          meta: [
            { k: "الطزاجة", v: "جمع يومي" },
            { k: "التعبئة", v: "أطباق وعبوات محمية" },
            { k: "التوفّر", v: "تموين مستمر" },
          ],
        },
      ],
    },
    quality: {
      eyebrow: "الجودة واللوجستيك",
      title: "الدقة،\nفي خدمة الطزاجة.",
      body: "قوّتنا غير مرئية: لوجستيك مصمَّم كي لا ينتظر المنتج أبداً. كل مركبة مبرّدة، وكل عملية تسليم متتبَّعة، وكل درجة حرارة مراقَبة.",
      pillars: [
        {
          title: "سلامة الغذاء",
          desc: "مراقبة صحية في كل مرحلة والتزام صارم بمعايير النظافة.",
        },
        {
          title: "سلسلة التبريد",
          desc: "درجة حرارة محكمة من التخزين حتى التسليم باليد.",
        },
        {
          title: "التتبّع",
          desc: "كل دفعة معرّفة، من المزرعة الشريكة إلى لحظة استلامك.",
        },
        {
          title: "تسليم في موعده",
          desc: "جولات مبرمَجة لانتظامٍ يمكنك الاعتماد عليه.",
        },
      ],
    },
    pro: {
      eyebrow: "الفضاء المهني",
      title: "شراكة،\nمصمَّمة كدائرة خاصة.",
      body: "تَلِج المطاعم والفنادق ومقدّمو خدمات الطعام والمؤسسات إلى فضاء مخصّص: طلبات مبسّطة، وتتبّع للتسليم، وشروط متفاوض عليها. علاقة ثقة على المدى الطويل.",
      points: [
        "طلبات متكررة ومبرمَجة",
        "تتبّع التسليم في الوقت الفعلي",
        "شروط تسعير مخصّصة",
        "مُحاوِر واحد وسريع الاستجابة",
      ],
      cta: "اطلب صلاحية الدخول",
      login: "الدخول إلى فضائي",
    },
    contact: {
      eyebrow: "اتصل بنا",
      title: "لنتحدّث عن احتياجاتك.",
      body: "فريقنا يجيبك ويبني معك حلّ تموينٍ يناسبك.",
      cta: "راسلنا",
      phone: "اتصل",
    },
    footer: {
      tagline: "توزيع الدواجن والبيض الطازج — المغرب.",
      explore: "استكشف",
      company: "البيت",
      contact: "اتصل",
      rights: "جميع الحقوق محفوظة.",
      address: "المغرب",
    },
    aria: {
      switchLang: "تغيير اللغة",
      menu: "افتح القائمة",
      close: "إغلاق",
      whatsapp: "تواصل معنا عبر واتساب",
    },
    placeholder: "صورة — تُضاف لاحقاً",
  },
} as const;

type Dict = (typeof dict)["fr"];

/* ------------------------------------------------------------
   Context
   ------------------------------------------------------------ */
interface I18nValue {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: Dict;
  setLocale: (l: Locale) => void;
  toggle: () => void;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const stored =
      (typeof window !== "undefined" &&
        (localStorage.getItem("hml-locale") as Locale | null)) ||
      null;
    if (stored === "fr" || stored === "ar") setLocaleState(stored);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") localStorage.setItem("hml-locale", l);
  }, []);

  const dir = dict[locale].dir as "ltr" | "rtl";

  useEffect(() => {
    const el = document.documentElement;
    el.lang = locale;
    el.dir = dir;
  }, [locale, dir]);

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      dir,
      t: dict[locale],
      setLocale,
      toggle: () => setLocale(locale === "fr" ? "ar" : "fr"),
    }),
    [locale, dir, setLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
