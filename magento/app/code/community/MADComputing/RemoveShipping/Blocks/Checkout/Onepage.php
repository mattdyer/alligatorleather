<?php
class MADComputing_RemoveShipping_Blocks_Checkout_Onepage extends Mage_Checkout_Block_Onepage
{
	protected function _getStepCodes()
	{
		return array('login', 'billing', 'shipping_method', 'payment', 'review');
	}
}
?>