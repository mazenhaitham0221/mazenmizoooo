// وظيفة للحصول على الموقع الجغرافي
function getLocation() {
    if (navigator.geolocation) {
        // طلب إذن المستخدم للحصول على الموقع
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("location").innerText = "الموقع الجغرافي غير مدعوم في هذا المتصفح.";
    }
}

// دالة لعرض الموقع إذا وافق المستخدم
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // عرض الموقع الجغرافي (خط العرض والطول)
    document.getElementById("location").innerText = 
        `خط العرض: ${latitude}, خط الطول: ${longitude}`;

    // عرض الموقع على الخريطة باستخدام خرائط جوجل
    showMap(latitude, longitude);
}

// دالة لعرض رسالة في حال حدوث خطأ
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("location").innerText = "تم رفض الإذن للوصول إلى الموقع.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("location").innerText = "الموقع غير متاح.";
            break;
        case error.TIMEOUT:
            document.getElementById("location").innerText = "انتهى الوقت للحصول على الموقع.";
            break;
        default:
            document.getElementById("location").innerText = "حدث خطأ غير معروف.";
            break;
    }
}

// دالة لعرض الموقع على خريطة جوجل
function showMap(latitude, longitude) {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latitude, lng: longitude },
        zoom: 15
    });

    const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map
    });
}

// إضافة Google Maps API
function initMap() {
    // سيتم تحميل الخريطة بعد الموافقة من المستخدم
}