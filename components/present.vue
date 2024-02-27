
import type { invalidateTypeCache } from 'vue/compiler-sfc';
<template>
    <section class="flex flex-wrap justify-center mt-5">
        <div class="w-1/3 text-2xl font-serif">
            <p>Bonjour 😃 ! je m'appelle Konan Kouame Aimé Fabrice , Je suis <span class="font-extrabold text-3xl"> developpeur web, Mobile , Data analyst & Data scientist👨🏾‍💻</span>, titulaire d'une licence en Systèmes Informatiques et Génie Logiciel, ainsi qu'un master 1 en Big Data Intelligence for Human Augmented Reality (BIHAR) à l'université de ESTIA. Ce portfolio vous donnera un aperçu de mes compétences.</p>
            <p class="flex justify-center mt-16 ">
                RETROUVEZ MOI SUR : 
                
            </p>
            <p class="flex justify-center mt-5 space-x-5  ">
            <NuxtLink class="shadow-md" to="/"><img class="w-10"  src="/git.png"/></NuxtLink>
            <NuxtLink class="shadow-md" to="/">  <img class="text-red-600 w-10" src="/linkd.svg"/></NuxtLink>
            <NuxtLink class="shadow-md" to="/">  <img class="text-red-600 w-10 h-8" src="/cv.gif"/></NuxtLink>
            </p>
            <p class="flex mt-5">
                Impossible n'est pas français pour un ingénieur de la TECH, La seule limite est ta propre imagination.
            </p>
            <NuxtLink to="/" class="flex mt-5 justify-center font-bold ">
               <p class="bg-blue-200">More...</p> 
            </NuxtLink>
            
        </div>
        <div class="w-1/3 relative">
            <img src="/present.jpg " />
            <NuxtLink to="/" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500 text-lg font-bold">Le monde du future  commence dès aujourd'hui, L'Intelligence Artificielle est le socle de cette révolution visionaire de DOMImplementation. </NuxtLink>
        </div>
    </section>
</template>