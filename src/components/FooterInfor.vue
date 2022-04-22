<template>
        <footer class="py-3 bg footer">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
                <router-link class="nav-link px-2" to="/products" append>產品列表</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link px-2" to="/cart" append>購物車</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link px-2" to="/me" append>關於我</router-link>
            </li>
        </ul>
        <p class="text-center">&copy; 本網站僅供個人作品使用，不提供商業用途 |
            <router-link class='footer-text' to="/login" append>登入管理後台</router-link>
        </p>
        <p class="text-center">HoSonRay © 2022 COPYRIGHT</p>
    </footer>
</template>
