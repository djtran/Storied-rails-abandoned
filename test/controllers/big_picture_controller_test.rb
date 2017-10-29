require 'test_helper'

class BigPictureControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get big_picture_create_url
    assert_response :success
  end

  test "should get read" do
    get big_picture_read_url
    assert_response :success
  end

  test "should get update" do
    get big_picture_update_url
    assert_response :success
  end

  test "should get delete" do
    get big_picture_delete_url
    assert_response :success
  end

end
