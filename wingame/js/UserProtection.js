$(function() {
  $('.upp_guide_btn').click(function() {
    $('.upp_guide_btn').siblings().removeClass('on');
    $('.upp_guide_btn').addClass('on');
    $('.date_select').hide()
    $('.upp_policy').hide()
    $('.upp_guide').show()
  }) //UPP 안내 버튼 클릭
  $('.upp_policy_btn').click(function() {
    $('.upp_policy_btn').siblings().removeClass('on');
    $('.upp_policy_btn').addClass('on');
    $('.date_select').show()
    $('.upp_guide').hide()
    $('.upp_policy').show()
  }) //UPP정책 버튼 클릭
}); //ready